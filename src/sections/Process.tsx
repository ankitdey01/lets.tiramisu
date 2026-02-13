import { Hand, ChefHat, Heart } from 'lucide-react';
import { ProcessStep } from '@/components/ProcessStep';
import { ScrollReveal } from '@/components/ScrollReveal';

const steps = [
  {
    number: '1',
    icon: Hand,
    title: 'Select',
    description:
      'Choose from our four signature flavors - Classic, Strawberry, Blueberry, or Pistachio',
  },
  {
    number: '2',
    icon: ChefHat,
    title: 'Crafted',
    description:
      'Our pastry chefs layer premium mascarpone cream with coffee-soaked ladyfingers and your chosen flavor',
  },
  {
    number: '3',
    icon: Heart,
    title: 'Savor',
    description:
      'Enjoy fresh, preservative-free tiramisu that melts in your mouth',
  },
];

export function Process() {
  return (
    <section className="section-padding bg-cream-vanilla dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black dark:text-gray-100 mb-4">
              Crafted to Perfection
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From selection to savoring, every step is made with care
            </p>
          </ScrollReveal>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              {...step}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
