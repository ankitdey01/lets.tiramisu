import { motion } from 'framer-motion';
import { Heart, MapPin, ChevronDown, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CountdownTimer } from '@/components/CountdownTimer';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-vanilla">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brown-warm/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Launch Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-brown-warm text-white px-4 py-2 text-sm font-medium rounded-full mb-6 inline-flex items-center gap-2 animate-pulse-glow">
                <span className="text-lg">🎉</span>
                Grand Opening - Feb 14, 2026
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="flex items-center justify-center lg:justify-start gap-3 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-rich-black">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-red-500 fill-red-500 animate-heart-beat" />
                <span>Let's</span>
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-red-500 fill-red-500 animate-heart-beat" />
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-brown-warm mt-2">
                Tiramisu.
              </span>
              <span className="block text-lg md:text-xl font-body font-medium text-gray-500 mt-2 tracking-widest">
                SINCE 2025
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-display text-brown-dark mb-4"
            >
              Opening Valentine's Day 2026
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-2"
            >
              Indulge in Artisanal Italian Bliss
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 mb-8"
            >
              <MapPin className="w-5 h-5 text-brown-warm" />
              <span>Kalyani Central Park | February 14th</span>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10"
            >
              <CountdownTimer />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection('#flavors')}
                className="btn-primary"
              >
                Explore Our Menu
              </Button>
              <a
                href="https://zomato.onelink.me/xqzv/ljckv9z8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-zomato w-full sm:w-auto">
                  <Utensils className="w-4 h-4 mr-2" />
                  Order on Zomato
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-brown-warm/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-2xl" />
              
              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/hero-tiramisu.jpg"
                  alt="Delicious layered tiramisu"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg"
                >
                  <p className="text-sm font-medium text-gray-600">100% Vegetarian</p>
                  <p className="text-lg font-display font-semibold text-brown-warm">No Preservatives</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center"
        >
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-brown-warm" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
