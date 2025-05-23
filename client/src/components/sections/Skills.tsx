import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SkillBar from "@/components/ui/skill-bar";
import { ArrowRight } from "lucide-react";

const skills = [
  {
    skill: "React Native",
    percentage: 90,
    description:
      "Expert in cross-platform mobile development with React Native, building scalable and performant mobile applications.",
    delay: 300,
  },
  {
    skill: "Next.js",
    percentage: 85,
    description:
      "Proficient in Next.js for building modern web applications with server-side rendering and static generation.",
    delay: 500,
  },
  {
    skill: "TypeScript",
    percentage: 80,
    description:
      "Strong knowledge of TypeScript for building type-safe applications and improving code quality.",
    delay: 700,
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-400 font-medium">My Skills</span>
            </div>

            <p className="text-gray-400 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Hi, I'm Talha Arshad, A React Native Developer Focused On
              Creating Easy-To-Use And Performant Mobile Applications. I'm
              Confident My High-Impact Development Skills Will Leave A Lasting Imprint On
              Your Project. I'm Excited To Collaborate With Your Team And
              Integrate My Passion Into Your Company.
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="text-right mb-8">
              <button className="inline-flex items-center space-x-2 text-white gradient-button px-6 py-3 rounded-full">
                <span>Hire Me Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-6">
              {skills.map((skillData) => (
                <SkillBar
                  key={skillData.skill}
                  skill={skillData.skill}
                  percentage={skillData.percentage}
                  description={skillData.description}
                  delay={skillData.delay}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
