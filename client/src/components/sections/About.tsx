import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import AnimatedCounter from "@/components/ui/animated-counter";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-400 font-medium">About Me</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              I've Been Developing
              <br />
              <span className="gradient-text">Since 2022</span>
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              As a passionate React Native developer, I specialize in creating
              cross-platform mobile applications that deliver exceptional user
              experiences. My journey in mobile development has led me to work
              on numerous projects, from small startups to large-scale
              applications.
            </p>

            {/* <button className="inline-flex items-center space-x-2 text-white gradient-button px-6 py-3 rounded-full">
              <span>More About Me</span>
              <ArrowRight className="w-4 h-4" />
            </button> */}
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="grid grid-cols-2 gap-8">
              <AnimatedCounter
                value={3}
                suffix="+"
                label="Years Of\nExperience"
                delay={500}
              />
              <AnimatedCounter
                value={25}
                suffix="+"
                label="Successful\nProjects"
                delay={700}
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-center">
              Focused on React Native development with expertise in TypeScript,
              JavaScript, and modern mobile development practices. Always
              learning and adapting to new technologies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
