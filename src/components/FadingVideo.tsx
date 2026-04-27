import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55;

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
}

export const FadingVideo = ({ src, className, style }: FadingVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafId = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    
    const video = videoRef.current;
    if (!video) return;

    const startOpacity = parseFloat(video.style.opacity) || 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      
      if (video) {
        video.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      video.style.opacity = '0';
      video.play().catch(e => console.log("Autoplay blocked", e));
      fadeTo(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (!fadingOutRef.current && video.duration - video.currentTime <= FADE_OUT_LEAD && video.duration - video.currentTime > 0) {
        fadingOutRef.current = true;
        fadeTo(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch(e => console.log("Play failed", e));
          fadingOutRef.current = false;
          fadeTo(1, FADE_MS);
        }
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, opacity: 0 }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
