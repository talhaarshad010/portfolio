// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { useScrollAnimation, useCounterAnimation } from "@/hooks/use-scroll-animation";

// interface AnimatedCounterProps {
//   value: number;
//   suffix?: string;
//   label: string;
//   delay?: number;
// }

// export default function AnimatedCounter({
//   value,
//   suffix = "",
//   label,
//   delay = 0,
// }: AnimatedCounterProps) {
//   const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
//   const { count, startAnimation } = useCounterAnimation(value);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     if (isVisible && !hasAnimated.current) {
//       setTimeout(() => {
//         startAnimation();
//         hasAnimated.current = true;
//       }, delay);
//     }
//   }, [isVisible, startAnimation, delay]);

//   return (
//     <motion.div
//       ref={ref}
//       className="text-center"
//       initial={{ opacity: 0, y: 20 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: delay / 1000 }}
//     >
//       <div className="text-5xl lg:text-6xl font-bold gradient-text mb-2">
//         {count}
//         {suffix}
//       </div>
//       <p className="text-gray-400 whitespace-pre-line">{label}</p>
//     </motion.div>
//   );
// }

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  useCounterAnimation,
} from "@/hooks/use-scroll-animation";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  delay = 0,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const { count, startAnimation } = useCounterAnimation(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      setTimeout(() => {
        startAnimation();
        hasAnimated.current = true;
      }, delay);
    }
  }, [isVisible, startAnimation, delay]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-5xl lg:text-6xl font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
        {label}
      </p>
    </motion.div>
  );
}
