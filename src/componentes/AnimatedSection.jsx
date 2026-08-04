import { motion } from "framer-motion";

function AnimatedSection({ children, className }) {
  return (
    <motion.section
      className={className}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
