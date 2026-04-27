import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-[#161a20] flex flex-col items-center justify-center p-6"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-8"
        >
          <h2 className="text-3xl font-rubik font-black text-white tracking-tighter mb-2">
            CINE CENTRAL <span className="text-[#21346e]">RAICHUR</span>
          </h2>
          <span className="text-xs uppercase tracking-[4px] text-white/40">Premium Private Cinema</span>
        </motion.div>
        
        <div className="h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-[#21346e]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between mt-4">
          <span className="text-[10px] text-white/40 uppercase tracking-widest">Initializing Cinematic Experience</span>
          <span className="text-[10px] text-white/40 font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
