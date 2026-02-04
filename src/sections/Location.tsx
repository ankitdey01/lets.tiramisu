import { motion } from 'framer-motion';
import { MapPin, Clock, Music, Camera, Gift, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const openingDetails = [
  { icon: Clock, text: 'Opening Time: 10:00 AM' },
  { icon: Gift, text: 'Special Inauguration Event' },
  { icon: Music, text: 'Live Music & Entertainment' },
  { icon: Gift, text: 'First Customer Specials' },
  { icon: Camera, text: 'Photo Opportunities' },
];

export function Location() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black mb-4">
              Join Us for the Grand Opening
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              {/* Grand Opening Badge */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-brown-warm to-brown-dark rounded-2xl p-6 text-white text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">🎉</span>
                  <span className="text-lg font-bold uppercase tracking-wider">
                    Grand Opening
                  </span>
                  <span className="text-2xl">🎉</span>
                </div>
                <p className="text-2xl md:text-3xl font-display font-bold">
                  Valentine's Day - February 14, 2026
                </p>
              </motion.div>

              {/* Location */}
              <div className="bg-cream-soft rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brown-warm/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brown-warm" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-semibold text-rich-black mb-1">
                      Let's Tiramisu.
                    </h3>
                    <p className="text-gray-600">
                      Kalyani Central Park
                      <br />
                      Kalyani, West Bengal
                    </p>
                  </div>
                </div>
              </div>

              {/* Opening Details */}
              <div>
                <h4 className="text-lg font-display font-semibold text-rich-black mb-4">
                  Opening Day Details
                </h4>
                <div className="space-y-3">
                  {openingDetails.map((detail, index) => (
                    <motion.div
                      key={detail.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <detail.icon className="w-5 h-5 text-brown-warm" />
                      <span className="text-gray-600">{detail.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://maps.google.com/?q=Kalyani+Central+Park"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="btn-primary w-full sm:w-auto">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal direction="right">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.536567782!2d88.4342!3d22.9753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8944c1f1e1b7f%3A0x2f3c3c3c3c3c3c3c!2sKalyani%20Central%20Park!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Let's.Tiramisu Location"
                className="absolute inset-0"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
