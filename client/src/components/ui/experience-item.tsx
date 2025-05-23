import { motion } from "framer-motion";

interface ExperienceItemProps {
  title: string;
  period: string;
  company: string;
  technologies: string[];
  description: string;
  delay?: number;
  periodColor?: string;
}

export default function ExperienceItem({
  title,
  period,
  company,
  technologies,
  description,
  delay = 0,
  periodColor = "text-cyan-400 bg-cyan-400/10",
}: ExperienceItemProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        <span className={`text-sm px-3 py-1 rounded-full ${periodColor}`}>
          {period}
        </span>
      </div>
      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm mb-3">
        <span>{company}</span>
        {technologies.map((tech, index) => (
          <span key={tech}>
            {index > 0 && "•"}
            <span className="ml-1">{tech}</span>
          </span>
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-400">{description}</p>
    </motion.div>
  );
}
