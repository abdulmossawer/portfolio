import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Slow down the parallax effect
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Ensure the animation is going back and forth
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: ["0%", "-220%"], // Defines the range for back and forth movement
      transition: {
        repeat: Infinity,
        repeatType: "mirror", // Makes the animation bounce back and forth
        duration: 100, // Duration for one complete loop
        ease: "easeInOut", // Smooth animation
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "Skills in Action" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div
        className="stars"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      ></motion.div>
    </div>
  );
};

export default Parallax;
