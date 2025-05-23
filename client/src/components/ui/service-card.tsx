import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
  gradient: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  gradient,
}: ServiceCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl p-8 group hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="flex items-center space-x-4 mb-6">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center group-hover:animate-float`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{description}</p>
    </motion.div>
  );
}
