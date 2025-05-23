import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                I'm{" "}
                <span className="gradient-text">Talha</span>
                <br />
                Arshad
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="glass rounded-2xl p-6 max-w-md">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">My Skills</span>
                  <div className="w-8 h-8 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-gray-600 dark:text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Expert React Native developer with expertise in TypeScript,
                  Next.js, and modern mobile app development.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              className="text-right space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg">Design That Speaks,</p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Experiences That Resonate</p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800"
                alt="Talha Arshad - React Native Developer"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl"></div>
            </motion.div>

            <motion.div
              className="text-right mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold">
                Digital Product
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-600">
                  Designer
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
