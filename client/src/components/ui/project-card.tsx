import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  alt: string;
  delay?: number;
}

export default function ProjectCard({
  title,
  category,
  image,
  alt,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-white/10 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
