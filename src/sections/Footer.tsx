import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, Utensils } from 'lucide-react';

const quickLinks = [
  { name: 'Our Story', href: '#story' },
  { name: 'Menu', href: '#flavors' },
  { name: 'Location', href: '#location' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQs', href: '#' },
];

const promises = [
  '100% Vegetarian',
  'No Preservatives',
  'Fresh Daily',
  'Premium Quality',
];

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/lets.tiramisu', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-rich-black text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-2 mb-1">
                <Heart className="w-5 h-5 text-brown-warm fill-brown-warm" />
                <span className="text-2xl font-display font-bold">Let's</span>
                <Heart className="w-5 h-5 text-brown-warm fill-brown-warm" />
              </div>
              <span className="text-3xl font-display font-bold text-brown-warm block">Tiramisu.</span>
              <span className="text-sm text-gray-400 tracking-widest mt-1 block">SINCE 2025</span>
            </motion.div>
            <p className="text-gray-400 text-sm mb-6">
              Artisanal Tiramisu, Made Fresh Daily
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brown-warm transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            {/* Zomato Order */}
            <motion.a
              href="https://zomato.onelink.me/xqzv/ljckv9z8"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 mt-4 bg-zomato text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
            >
              <Utensils className="w-4 h-4" />
              Order on Zomato
            </motion.a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-brown-warm transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Promise */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Promise</h4>
            <ul className="space-y-3">
              {promises.map((promise) => (
                <li key={promise} className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brown-warm fill-brown-warm" />
                  <span className="text-gray-400 text-sm">{promise}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@letstiramisu.com"
                  className="flex items-center gap-2 text-gray-400 hover:text-brown-warm transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contact@letstiramisu.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-center gap-2 text-gray-400 hover:text-brown-warm transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Kalyani Central Park
                  <br />
                  Kalyani, West Bengal
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              © 2025 Let's Tiramisu. | Opening February 14, 2026
            </p>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for dessert lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
