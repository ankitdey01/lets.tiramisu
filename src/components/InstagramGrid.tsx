import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramImages = [
  '/images/instagram/insta-1.jpg',
  '/images/instagram/insta-2.jpg',
  '/images/instagram/insta-3.jpg',
  '/images/instagram/insta-4.jpg',
  '/images/instagram/insta-5.jpg',
  '/images/instagram/insta-6.jpg',
  '/images/instagram/insta-7.jpg',
  '/images/instagram/insta-8.jpg',
  '/images/instagram/insta-9.jpg',
];

export function InstagramGrid() {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {instagramImages.map((image, index) => (
        <motion.a
          key={index}
          href="https://instagram.com/lets.tiramisu"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ scale: 1.02 }}
          className="relative aspect-square overflow-hidden rounded-lg group"
        >
          <img
            src={image}
            alt={`Instagram post ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-brown-rich/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Instagram className="w-8 h-8 text-white" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}
