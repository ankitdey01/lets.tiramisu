import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Phone, Check, Gift, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollReveal } from '@/components/ScrollReveal';

export function Waitlist() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    updates: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brown-warm to-brown-dark" />
      
      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Be the First to Taste
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/80 mb-2">
              Get Notified About Our Grand Opening
            </p>
            <p className="text-base text-white/60 mb-8">
              February 14, 2026 | Kalyani Central Park
            </p>
          </ScrollReveal>

          {/* Incentive */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-10"
            >
              <Gift className="w-5 h-5 text-white" />
              <span className="text-white font-medium">
                Sign up and get 10% off on your first order!
              </span>
            </motion.div>
          </ScrollReveal>

          {/* Form */}
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-6 md:p-10 shadow-2xl"
              >
                <div className="space-y-5">
                  <div className="text-left">
                    <Label htmlFor="name" className="text-gray-700 mb-2 block">
                      Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="pl-12 h-14 rounded-xl border-gray-200 focus:border-brown-warm focus:ring-brown-warm"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <Label htmlFor="email" className="text-gray-700 mb-2 block">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="pl-12 h-14 rounded-xl border-gray-200 focus:border-brown-warm focus:ring-brown-warm"
                      />
                    </div>
                  </div>

                  <div className="text-left">
                    <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                      Phone Number <span className="text-gray-400">(Optional)</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-12 h-14 rounded-xl border-gray-200 focus:border-brown-warm focus:ring-brown-warm"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-left">
                    <Checkbox
                      id="updates"
                      checked={formData.updates}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, updates: checked as boolean })
                      }
                      className="mt-1 border-gray-300 data-[state=checked]:bg-brown-warm data-[state=checked]:border-brown-warm"
                    />
                    <Label htmlFor="updates" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                      I want to receive updates about launch offers and exclusive deals
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-brown-warm hover:bg-brown-dark text-white rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Joining...
                      </>
                    ) : (
                      'Join the Waitlist'
                    )}
                  </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-10 shadow-2xl"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Check className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-rich-black mb-3">
                  You're on the List!
                </h3>
                <p className="text-gray-600 mb-2">
                  Thank you for joining our waitlist, {formData.name}!
                </p>
                <p className="text-gray-500 text-sm">
                  We'll send updates to {formData.email}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
