import { motion } from 'framer-motion';
import { Instagram as InstagramIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { InstagramGrid } from '@/components/InstagramGrid';
import { ScrollReveal } from '@/components/ScrollReveal';

const benefits = [
  'Behind-the-scenes content',
  'Launch updates',
  'Special offers',
  'Drool-worthy food photography',
];

export function Instagram() {
  return (
    <section className="section-padding bg-cream-vanilla">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <ScrollReveal direction="left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black mb-4">
                Follow Our Sweet Journey
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <a
                href="https://instagram.com/lets.tiramisu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brown-warm hover:text-brown-dark transition-colors mb-6"
              >
                <InstagramIcon className="w-6 h-6" />
                <span className="text-xl font-medium">@lets.tiramisu</span>
              </a>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-base text-gray-600 mb-6">
                Follow us on Instagram for:
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-brown-warm rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.5}>
              <a
                href="https://instagram.com/lets.tiramisu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-primary">
                  <InstagramIcon className="w-4 h-4 mr-2" />
                  Follow @lets.tiramisu
                </Button>
              </a>
            </ScrollReveal>
          </div>

          {/* Instagram Grid */}
          <ScrollReveal direction="right">
            <InstagramGrid />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
