import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ServiceCard from "@/components/ui/service-card";
import { Code, Smartphone, ArrowRight } from "lucide-react";
import { navigate } from "wouter/use-browser-location";

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
    <section id="services" className="py-20" ref={ref}>
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

            <h2 className="text-4xl lg:text-5xl font-bold">What I Do?</h2>

            <p className="text-gray-400 text-lg mt-4 max-w-2xl">
              I specialize in React Native mobile development and modern web
              technologies, creating seamless digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="hidden lg:inline-flex items-center space-x-2 text-white gradient-button px-6 py-3 rounded-full"
            >
              <span>Give Me Feedback</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
