import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProjectCard from "@/components/ui/project-card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { navigate } from "wouter/use-browser-location";

const projects = [
  {
    title: "ABET Broker App",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "ABET Broker mobile application interface",
    description:
      "Led the design and development of the user interface for a mobile broker app using React Native, creating and optimizing over 50 screens to improve user navigation and engagement by 40%.",
  },
  {
    title: "Music Streaming App",
    category: "Cross-Platform",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "Music streaming application design",
    description:
      "Designed the user flow and interface for a cross-platform music streaming app using React Native, improving user navigation and engagement by 30%. Integrated AWS backend with MongoDB for reliable data storage.",
  },
  {
    title: "My-Brew",
    category: "Full-Stack",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "My-Brew recipe sharing application",
    description:
      "Solely developed a full-stack React application for sharing and discovering brewing recipes, enhancing user engagement by 40% through intuitive UI/UX design. Built both frontend and backend functionalities.",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    alt: "E-commerce platform interface",
    description:
      "Contributed to the development of e-commerce platforms and multi-user systems, boosting client acquisition by 35% and reducing overall project delivery time by 20%.",
  },
];

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />

      <section className="pt-32 pb-20" ref={ref}>
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

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              See My Recent
              <br />
              <span className="gradient-text">Works</span>
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A collection of projects showcasing my expertise in React Native
              development, full-stack web applications, and modern mobile
              technologies. Each project demonstrates my commitment to clean
              code, performance optimization, and exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-white/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass rounded-3xl p-8 lg:p-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="gradient-text">Next Project?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your mobile app or web application
              ideas to life. I'm passionate about creating solutions that make a
              real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigate("/contact");
                }}
                className="gradient-button text-white px-8 py-4 rounded-full text-lg"
              >
                Start a Project
              </button>
              {/* <button className="border border-gray-300 dark:border-white/20 text-gray-800 dark:text-white px-8 py-4 rounded-full text-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                View More Work
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
