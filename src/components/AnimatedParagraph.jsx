"use client";

import { useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";

const pVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(15px)" },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: index * 0.15,
    },
  }),
};

const AnimatedParagraph = ({ text, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.7 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    } else {
      controls.start("hidden");
      setHasAnimated(false);
    }
  }, [inView, controls]);
  return (
    <motion.p
      ref={ref}
      custom={index}
      variants={pVariants}
      initial="hidden"
      animate={controls}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedParagraph;
