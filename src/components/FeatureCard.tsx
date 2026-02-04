import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -4, borderColor: '#C2783C' }}
      className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-card"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="w-14 h-14 bg-cream-vanilla rounded-xl flex items-center justify-center mb-5"
      >
        <Icon className="w-7 h-7 text-brown-warm" strokeWidth={1.5} />
      </motion.div>
      <h3 className="text-lg md:text-xl font-display font-semibold text-rich-black mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
