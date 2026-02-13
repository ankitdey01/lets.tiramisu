import { Navigation } from '@/components/Navigation';
import { FloatingHearts } from '@/components/FloatingHearts';
import { ThemeProvider } from '@/context/ThemeContext';
import { Hero } from '@/sections/Hero';
import { BrandStory } from '@/sections/BrandStory';
import { Flavors } from '@/sections/Flavors';
import { Features } from '@/sections/Features';
import { Valentines } from '@/sections/Valentines';
import { Process } from '@/sections/Process';
import { Location } from '@/sections/Location';
import { Waitlist } from '@/sections/Waitlist';
import { Instagram } from '@/sections/Instagram';
import { Footer } from '@/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-cream-vanilla dark:bg-gray-950 transition-colors duration-300">
        {/* Floating Hearts Background */}
        <FloatingHearts />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <BrandStory />
          <Flavors />
          <Features />
          <Valentines />
          <Process />
          <Location />
          <Waitlist />
          <Instagram />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
