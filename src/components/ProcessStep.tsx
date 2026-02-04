import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  isLast?: boolean;
}

export function ProcessStep({
  number,
  icon: Icon,
  title,
  description,
  index,
  isLast = false,
}: ProcessStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Connector Line */}
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brown-warm/30 to-brown-warm/10 origin-left"
        />
      )}

      {/* Icon Circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="relative w-24 h-24 bg-white rounded-full shadow-card flex items-center justify-center mb-6"
      >
        <span className="absolute -top-2 -right-2 w-8 h-8 bg-brown-warm text-white rounded-full flex items-center justify-center text-sm font-bold">
          {number}
        </span>
        <Icon className="w-10 h-10 text-brown-warm" strokeWidth={1.5} />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-display font-semibold text-rich-black mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs">
        {description}
      </p>
    </motion.div>
  );
}
