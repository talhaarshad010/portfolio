import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SkillBarProps {
  skill: string;
  percentage: number;
  description: string;
  delay?: number;
}

export default function SkillBar({
  skill,
  percentage,
  description,
  delay = 0,
}: SkillBarProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && progressRef.current) {
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.width = `${percentage}%`;
        }
      }, delay);
    }
  }, [isVisible, percentage, delay]);

  const getGradientColor = (percentage: number) => {
    if (percentage >= 85) return "from-cyan-400 to-indigo-600";
    if (percentage >= 80) return "from-purple-400 to-indigo-600";
    return "from-indigo-400 to-purple-600";
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-lg font-semibold text-white">{skill}</h4>
        <span className="text-cyan-400 font-bold">{percentage}%</span>
      </div>
      <p className="text-gray-400 text-sm mb-3">{description}</p>
      <div className="bg-gray-800 rounded-full h-2 relative overflow-hidden">
        <div
          ref={progressRef}
          className={`h-2 rounded-full relative transition-all duration-1500 ease-out bg-gradient-to-r ${getGradientColor(
            percentage
          )}`}
          style={{ width: "0%" }}
        >
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
        </div>
      </div>
    </motion.div>
  );
}
