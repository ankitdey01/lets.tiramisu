import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface FlavorCardProps {
  name: string;
  description: string;
  image: string;
  tag: string;
  accentColor: string;
  index: number;
}

export function FlavorCard({ name, description, image, tag, accentColor, index }: FlavorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      className="group bg-cream-soft rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-400"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute top-4 left-4">
          <Badge
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: `${accentColor}26`,
              color: accentColor,
            }}
          >
            {tag}
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-display font-semibold text-rich-black mb-3">
          {name}
        </h3>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Available Feb 14
          </span>
        </div>
      </div>
    </motion.div>
  );
}
