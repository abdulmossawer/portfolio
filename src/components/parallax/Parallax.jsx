import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Adjust these values to slow down the scroll effect
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Slower scroll effect
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]); // Slower scroll effect

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: ["0%", "-30%"], // Reduced range for slower movement
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 100, // Increased duration for slower animation
        ease: "easeInOut", // Smooth transition
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
      <motion.div className="mountains" style={{ y: yBg }} />
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div
        className="stars"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default Parallax;
