// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useLocation } from "wouter";
// import { ThemeToggle } from "@/components/ui/theme-toggle";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [location] = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     if (location === "/") {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <motion.nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "navbar-blur border-b border-white/10" : ""
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <motion.div
//             className="flex items-center space-x-2"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">T</span>
//             </div>
//             <span className="text-xl font-bold text-foreground">alha</span>
//           </motion.div>

//           <motion.div
//             className="hidden md:flex space-x-8"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <Link href="/">
//               <button
//                 onClick={() => scrollToSection("home")}
//                 className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
//               >
//                 Home
//               </button>
//             </Link>
//             <Link href="/about">
//               <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
//                 About
//               </button>
//             </Link>
//             <Link href="/services">
//               <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
//                 Services
//               </button>
//             </Link>
//             <Link href="/projects">
//               <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
//                 Projects
//               </button>
//             </Link>
//             <Link href="/contact">
//               <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
//                 Contact
//               </button>
//             </Link>
//           </motion.div>

//           <div className="flex items-center space-x-4">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//             >
//               <ThemeToggle />
//             </motion.div>

//             <motion.button
//               className="gradient-button text-white px-6 py-2 rounded-full"
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//               onClick={() => scrollToSection("contact")}
//             >
//               Hire Me Now
//             </motion.button>
//           </div>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = (sectionId: string) => {
  //   setIsMobileMenuOpen(false); // Close mobile menu when navigating
  //   if (location === "/") {
  //     const element = document.getElementById(sectionId);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // };

  const scrollToSection = (sectionId: string) => {
    if (location === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      localStorage.setItem("scrollTo", sectionId);
      window.location.href = "/";
    }
  };

  const navigateToPage = (path: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "navbar-blur border-b border-white/10" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-bold text-foreground">alha</span>
          </motion.div>

          <motion.div
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                Home
              </button>
            </Link>
            <Link href="/about">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                About
              </button>
            </Link>
            <Link href="/services">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Services
              </button>
            </Link>
            <Link href="/projects">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                Contact
              </button>
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>

            {/* Desktop Hire Me Button */}
            <motion.button
              className="hidden md:block gradient-button text-white px-6 py-2 rounded-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={() => scrollToSection("contact")}
            >
              Hire Me Now
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 pt-2 pb-6 space-y-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10">
                <Link href="/">
                  <button
                    onClick={() => {
                      scrollToSection("home");
                      navigateToPage("/");
                    }}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2"
                  >
                    Home
                  </button>
                </Link>
                <Link href="/about">
                  <button
                    onClick={() => navigateToPage("/about")}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2"
                  >
                    About
                  </button>
                </Link>
                <Link href="/services">
                  <button
                    onClick={() => navigateToPage("/services")}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2"
                  >
                    Services
                  </button>
                </Link>
                <Link href="/projects">
                  <button
                    onClick={() => navigateToPage("/projects")}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2"
                  >
                    Projects
                  </button>
                </Link>
                <Link href="/contact">
                  <button
                    onClick={() => navigateToPage("/contact")}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 py-2"
                  >
                    Contact
                  </button>
                </Link>

                {/* Mobile Hire Me Button */}
                <button
                  className="w-full gradient-button text-white px-6 py-3 rounded-full mt-4"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      scrollToSection("contact");
                    }, 100);
                  }}
                >
                  Hire Me Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
