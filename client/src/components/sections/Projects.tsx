import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProjectCard from "@/components/ui/project-card";

const projects = [
  {
    title: "Feed Instagram",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Mobile social media app interface design",
  },
  {
    title: "Web Design",
    category: "Digital Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Modern web design on laptop screen",
  },
  {
    title: "E-Commerce",
    category: "Digital Design",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "E-commerce website design for furniture",
  },
  {
    title: "Mobile App",
    category: "User Interface",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Mobile app user interface design",
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

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
