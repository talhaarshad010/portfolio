import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    title: "ABET Broker App",
    category: "React Native",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "ABET Broker mobile app interface with 50+ optimized screens",
  },
  {
    title: "Music Streaming App",
    category: "React Native",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Cross-platform music streaming app with AWS backend",
  },
  {
    title: "My-Brew",
    category: "Full Stack React",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Full-stack brewing recipe sharing application",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
            <span className="text-cyan-400 font-medium">My Projects</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            See My Recent
            <br />
            <span className="gradient-text">Works</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in React Native
            development and modern web technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              image={project.image}
              alt={project.alt}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
