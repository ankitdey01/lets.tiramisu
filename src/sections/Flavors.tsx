import { motion } from 'framer-motion';
import { FlavorCard } from '@/components/FlavorCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const flavors = [
  {
    name: 'Classic Tiramisu',
    description:
      'The timeless Italian masterpiece. Rich mascarpone cream layered with espresso-soaked ladyfingers, finished with a dusting of premium cocoa powder. Pure, authentic, unforgettable.',
    image: '/images/classic-tiramisu.jpg',
    tag: 'Best Seller',
    accentColor: '#5C3D2E',
  },
  {
    name: 'Strawberry Tiramisu',
    description:
      "Romance in every layer. Fresh strawberry compote swirled through creamy mascarpone, topped with strawberry pieces and white chocolate shavings. Perfect for Valentine's Day.",
    image: '/images/strawberry-tiramisu.jpg',
    tag: "Valentine's Special",
    accentColor: '#E8A5A5',
  },
  {
    name: 'Blueberry Tiramisu',
    description:
      'Berry blissful indulgence. Tangy blueberry reduction meets smooth mascarpone cream, crowned with fresh blueberries and a hint of lemon zest.',
    image: '/images/blueberry-tiramisu.jpg',
    tag: "Chef's Choice",
    accentColor: '#7B6B8D',
  },
  {
    name: 'Pistachio Tiramisu',
    description:
      'Nutty sophistication. Crushed Sicilian pistachios folded into velvety mascarpone, layered with pistachio cream and topped with roasted pistachio crumbles.',
    image: '/images/pistachio-tiramisu.jpg',
    tag: 'Exotic Delight',
    accentColor: '#9CAF88',
  },
];

export function Flavors() {
  return (
    <section id="flavors" className="section-padding bg-cream-vanilla dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black dark:text-gray-100 mb-4">
              Four Flavors, Endless Bliss
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Each crafted with love, using only the finest ingredients
            </p>
          </ScrollReveal>
        </div>

        {/* Flavor Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {flavors.map((flavor, index) => (
            <FlavorCard
              key={flavor.name}
              {...flavor}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-gray-500">
            All flavors available starting February 14, 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
