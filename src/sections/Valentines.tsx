import { motion } from 'framer-motion';
import { Heart, MapPin, Camera, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

const engagementSteps = [
  { 
    number: '1', 
    icon: MapPin, 
    text: 'Find the store around Central Park, Kalyani.' 
  },
  { 
    number: '2', 
    icon: Camera, 
    text: 'Take a selfie with this banner, post it on your story and tag us.' 
  },
  { 
    number: '3', 
    icon: MessageCircle, 
    text: 'We will personal DM you a special offer just for you 😉' 
  },
];

export function Valentines() {
  const scrollToWaitlist = () => {
    const element = document.querySelector('#waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-vanilla via-cream-vanilla to-pink-50" />
      
      {/* Heart Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-brown-warm fill-brown-warm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: 20 + Math.random() * 30,
              height: 20 + Math.random() * 30,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <ScrollReveal direction="left">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-heart-beat" />
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-heart-beat animation-delay-200" />
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-heart-beat animation-delay-400" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-rich-black mb-6">
                Celebrate Love with Tiramisu
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
                This Valentine's Day, say 'I love you' with layers of sweetness.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <p className="text-sm font-medium text-brown-warm uppercase tracking-wider mb-2">
                  Opening February 14th, 2026
                </p>
                <p className="text-base text-gray-600">
                  Join us for our Grand Opening celebration!
                </p>
              </div>
            </ScrollReveal>

            {/* Engagement Steps */}
            <ScrollReveal direction="left" delay={0.4}>
              <h4 className="text-lg font-display font-semibold text-rich-black mb-4">
                How to get a special offer:
              </h4>
              <div className="space-y-4 mb-8">
                {engagementSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 bg-white/60 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="w-8 h-8 bg-brown-warm text-white rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold">
                      {step.number}
                    </div>
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 text-brown-warm flex-shrink-0" />
                      <span className="text-gray-700">{step.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.6}>
              <p className="text-lg font-display font-medium text-brown-warm mb-6">
                See you on 14th Feb at our store. <span className="text-red-500">❤️</span>
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.7}>
              <Button
                onClick={scrollToWaitlist}
                className="btn-primary"
              >
                <Heart className="w-4 h-4 mr-2" />
                Join the Waitlist
              </Button>
            </ScrollReveal>
          </div>

          {/* Image */}
          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-full h-full bg-pink-100 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/valentines-special.jpg"
                  alt="Valentine's Day tiramisu special"
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Floating hearts */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/4"
              >
                <Heart className="w-8 h-8 text-red-400 fill-red-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/4 -right-4"
              >
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
              </motion.div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
