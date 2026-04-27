import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import Specs from './components/Specs';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { HorizontalShowcase } from './components/HorizontalShowcase';
import { Reviews } from './components/Reviews';
import { InstagramReels } from './components/InstagramReels';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { Introduction } from './components/Introduction';

function App() {
  return (
    <div className="bg-brand-black text-brand-cream selection:bg-brand-gold selection:text-black">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Specs />
        <Services />
        <Pricing />
        <HorizontalShowcase />
        <Reviews />
        <InstagramReels />
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
