import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ServiceCard from "@/components/ui/service-card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { Code, Smartphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "Building modern, responsive websites using React, Next.js, and cutting-edge web technologies for optimal performance.",
    gradient: "from-indigo-500 to-purple-600",
    delay: 0,
  },
  {
    icon: Smartphone,
    title: "React Native App Development",
    description:
      "Creating cross-platform mobile applications with React Native, delivering native performance across iOS and Android.",
    gradient: "from-cyan-500 to-indigo-600",
    delay: 0.3,
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-cyan-400 font-medium">My Services</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6">What I Do?</h1>

              <p className="text-gray-400 text-lg max-w-2xl">
                I specialize in React Native mobile development and modern web
                technologies, creating seamless digital experiences that engage users
                and drive results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <button className="hidden lg:inline-flex items-center space-x-2 text-white gradient-button px-6 py-3 rounded-full">
                <span>Give Me Feedback</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                gradient={service.gradient}
                delay={service.delay}
              />
            ))}
          </div>

          <motion.div
            className="glass rounded-3xl p-8 lg:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Why Choose <span className="gradient-text">My Services?</span>
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">Performance Focused:</span> Optimized applications with 25% faster load times
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">Clean Code:</span> Maintainable and scalable code architecture
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">Timely Delivery:</span> 100% on-time delivery with 45% increase in client satisfaction
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <p className="text-gray-400">
                      <span className="text-white font-semibold">User Experience:</span> 30% improvement in user retention through intuitive design
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block glass rounded-2xl p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">45%</div>
                  <p className="text-gray-400">Client Satisfaction Increase</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}