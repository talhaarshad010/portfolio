import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ExperienceItem from "@/components/ui/experience-item";
import { Download } from "lucide-react";

const experiences = [
  {
    title: "Senior React Native Developer",
    period: "02/2023 - Present",
    company: "Tech Innovations Ltd",
    technologies: ["React Native", "TypeScript", "Redux"],
    description:
      "Leading mobile app development projects, mentoring junior developers, and implementing best practices for scalable React Native applications.",
    periodColor: "text-cyan-400 bg-cyan-400/10",
    delay: 0,
  },
  {
    title: "Junior React Native Developer",
    period: "08/2022 - 01/2023",
    company: "StartupHub Solutions",
    technologies: ["React Native", "JavaScript", "Firebase"],
    description:
      "Developed cross-platform mobile applications, collaborated with design teams, and gained expertise in React Native ecosystem and mobile development patterns.",
    periodColor: "text-purple-400 bg-purple-400/10",
    delay: 0.2,
  },
];

export default function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              <span className="text-cyan-400 font-medium">My Experience</span>
            </div>

            <div className="space-y-8">
              {experiences.map((experience) => (
                <ExperienceItem
                  key={experience.title}
                  title={experience.title}
                  period={experience.period}
                  company={experience.company}
                  technologies={experience.technologies}
                  description={experience.description}
                  periodColor={experience.periodColor}
                  delay={experience.delay}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Take Your
              <br />
              Business Into
              <br />
              <span className="gradient-text">The Next Level</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Let's Work Together. I'm Open For Part Time/Freelance
            </p>

            <p className="text-gray-400 mb-8">
              Ready to bring your mobile app ideas to life with modern React
              Native development. Let's collaborate to create something amazing
              that stands out in the market.
            </p>

            <button className="inline-flex items-center space-x-2 text-white gradient-button px-8 py-4 rounded-full text-lg">
              <span>Download CV</span>
              <Download className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
