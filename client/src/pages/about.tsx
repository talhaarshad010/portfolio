import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import AnimatedCounter from "@/components/ui/animated-counter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ArrowRight } from "lucide-react";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      
      <section className="pt-32 pb-20" ref={ref}>
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

              <h1 className="text-4xl lg:text-6xl font-bold mb-8">
                I've Been Developing
                <br />
                <span className="gradient-text">Since 2022</span>
              </h1>

              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  As a passionate React Native developer with 2+ years of experience, 
                  I specialize in creating cross-platform mobile applications that deliver 
                  exceptional user experiences. Currently pursuing my Bachelor's in Computer 
                  Science at SZABIST, Karachi.
                </p>
                
                <p>
                  My journey in mobile development has led me to work on numerous projects, 
                  from small startups to large-scale applications. I'm skilled in collaborating 
                  with teams and engaging users through intuitive UI/UX design.
                </p>
                
                <p>
                  I'm passionate about clean code, performance optimization, and solving 
                  real-world problems through technology. My focus is on React Native 
                  development with expertise in TypeScript, JavaScript, and modern mobile 
                  development practices.
                </p>
              </div>

              <a 
                href="/Cv.pdf" 
                download="Muhammad_Talha_Arshad_CV.pdf"
                className="mt-8 inline-flex items-center space-x-2 text-white gradient-button px-6 py-3 rounded-full"
              >
                <span>Download CV</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 gap-8">
                <AnimatedCounter
                  value={2}
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

              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">Bachelor's in Computer Science</h4>
                    <p className="text-cyan-400">SZABIST, Karachi, Pakistan</p>
                    <p className="text-gray-400 text-sm">08/2023 – Present</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Web Development Fundamentals</h4>
                    <p className="text-cyan-400">APTECH, Karachi, Pakistan</p>
                    <p className="text-gray-400 text-sm">02/2023 – 08/2023</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-center">
                Focused on React Native development with expertise in TypeScript,
                JavaScript, and modern mobile development practices. Always
                learning and adapting to new technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}