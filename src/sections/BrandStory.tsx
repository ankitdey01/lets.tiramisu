import { motion } from 'framer-motion';
import { Leaf, Ban, Heart, Sparkles, Flag } from 'lucide-react';
import { ScrollReveal } from '@/components/ScrollReveal';

const badges = [
  { icon: Leaf, text: '100% Vegetarian', color: 'text-green-600' },
  { icon: Ban, text: 'No Preservatives', color: 'text-red-500' },
  { icon: Heart, text: 'Made Fresh Daily', color: 'text-red-500' },
  { icon: Sparkles, text: 'Premium Ingredients', color: 'text-amber-500' },
  { icon: Flag, text: 'Authentic Italian Recipe', color: 'text-green-600' },
];

export function BrandStory() {
  return (
    <section id="story" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-cream-vanilla rounded-3xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-card"
              >
                <img
                  src="/images/brand-story.jpg"
                  alt="Fresh tiramisu ingredients"
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black mb-6">
                Welcome to{' '}
                <span className="text-brown-warm">Let's Tiramisu.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                At Let's Tiramisu, we believe that life's sweetest moments deserve the 
                finest treats. Opening this Valentine's Day at Kalyani Central Park, 
                we're bringing authentic, artisanal tiramisu to West Bengal - crafted 
                fresh daily with love, premium ingredients, and absolutely no preservatives.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Each spoonful is a journey through layers of mascarpone cream, 
                coffee-soaked ladyfingers, and pure indulgence. 100% vegetarian, 
                100% delicious, 100% made for you.
              </p>
            </ScrollReveal>

            {/* Badges */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-cream-soft px-4 py-2 rounded-full"
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-sm font-medium text-gray-700">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
