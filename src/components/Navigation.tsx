import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { name: 'Our Story', href: '#story' },
  { name: 'Flavors', href: '#flavors' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-vanilla/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm dark:shadow-gray-800/20'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="w-4 h-4 text-brown-warm dark:text-amber-500 fill-brown-warm dark:fill-amber-500" />
              <span className="font-display font-bold text-xl text-rich-black dark:text-gray-100">Let's</span>
              <Heart className="w-4 h-4 text-brown-warm dark:text-amber-500 fill-brown-warm dark:fill-amber-500" />
              <span className="font-display font-bold text-2xl text-brown-warm dark:text-amber-500 ml-1">Tiramisu.</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-sm font-medium text-rich-black/70 dark:text-gray-300 hover:text-rich-black dark:hover:text-gray-100 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-brown-warm dark:bg-amber-500 origin-center"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="https://zomato.onelink.me/xqzv/ljckv9z8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-zomato hover:bg-red-700 text-white rounded-full px-5 py-2 text-sm font-medium"
                >
                  <Utensils className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </a>
              <Button
                onClick={() => scrollToSection('#waitlist')}
                className="btn-primary text-sm py-2 px-5"
              >
                Join Waitlist
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-rich-black dark:text-gray-100" />
              ) : (
                <Menu className="w-6 h-6 text-rich-black dark:text-gray-100" />
              )}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 bg-cream-vanilla dark:bg-gray-950 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-display font-semibold text-rich-black dark:text-gray-100"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col gap-3 items-center"
              >
                <ThemeToggle />
                <a
                  href="https://zomato.onelink.me/xqzv/ljckv9z8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-zomato hover:bg-red-700 text-white rounded-full">
                    <Utensils className="w-4 h-4 mr-2" />
                    Order on Zomato
                  </Button>
                </a>
                <Button
                  onClick={() => scrollToSection('#waitlist')}
                  className="btn-primary"
                >
                  Join Waitlist
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
