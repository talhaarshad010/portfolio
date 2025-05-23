import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for your interest. I'll be in touch soon.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <footer id="contact" className="py-20 border-t border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Let's Work
              <br />
              <span className="gradient-text">Together</span>
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-xl font-bold text-foreground">alha Arshad</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Ready to bring your ideas to life with cutting-edge React Native
                development and modern web technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Email Me:</span>
                <p className="text-foreground font-medium">talhaarshad010@gmail.com</p>
              </div>

              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Phone Number:</span>
                <p className="text-foreground font-medium">(+92) 311 238 8611</p>
              </div>

              <div>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Location:</span>
                <p className="text-foreground font-medium">Karachi, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="text-right mb-8">
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Interested in working together? Let's discuss your project and
                how I can help bring your vision to reality.
              </p>
              <p className="text-foreground font-medium">talhaarshad010@gmail.com</p>
              <button className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mt-2">
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-button text-white py-4 rounded-xl font-medium"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <div className="flex space-x-4 mt-8 justify-end">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Copyright © 2025 Talha Arshad | React Native Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
