import { Leaf, Ban, Heart, Coffee, Palette, MapPin } from 'lucide-react';
import { FeatureCard } from '@/components/FeatureCard';
import { ScrollReveal } from '@/components/ScrollReveal';

const features = [
  {
    icon: Leaf,
    title: '100% Vegetarian',
    description:
      'Crafted for everyone. Our tiramisu uses premium vegetarian ingredients, ensuring no one misses out on the indulgence.',
  },
  {
    icon: Ban,
    title: 'No Preservatives',
    description:
      'Pure & Fresh. We make our tiramisu fresh every day using only natural ingredients - no artificial preservatives, colors, or flavors.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description:
      'Artisanal Craftsmanship. Each tiramisu is handcrafted by our pastry chefs using authentic Italian techniques.',
  },
  {
    icon: Coffee,
    title: 'Premium Ingredients',
    description:
      'Quality First. We source the best mascarpone, imported cocoa, specialty coffee, and fresh fruits for an authentic experience.',
  },
  {
    icon: Palette,
    title: 'Innovative Flavors',
    description:
      'Beyond Tradition. While honoring the classic, we create exciting flavor variations that celebrate local tastes.',
  },
  {
    icon: MapPin,
    title: 'Conveniently Located',
    description:
      "Easy to Find. Located in the heart of Kalyani Central Park, we're your neighborhood destination for premium desserts.",
  },
];

export function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black mb-4">
              What Makes Us Special
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Every layer tells a story of quality and care
            </p>
          </ScrollReveal>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
