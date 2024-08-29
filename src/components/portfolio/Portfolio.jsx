import { useRef, useState } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Hire Haven",
    img: "/jobpt.png",
    video: "/jobportal.mp4", // Add the video URL here
    desc: "Discover a seamless job search experience with our MERN-powered portal. Connecting job seekers and employers effortlessly, it’s built with MongoDB, Express.js, React, and Node.js for dynamic, real-time functionality. Simplify your job hunt with intuitive features and a user-friendly interface. Explore opportunities and take the next step in your career with ease.",
    github: "https://github.com/abdulmossawer/Job_Portal",
    demo: "https://hire-haven.onrender.com/",
  },

  {
    id: 1,
    title: "Thoughts Unbound",
    img: "/thou.png",
    video: "/unbound.mp4", // Add the video URL here
    desc: "Share your ideas effortlessly with 'Thoughts Unbound,' a React-powered blog app using Appwrite for backend services. Designed for seamless content creation and management, this app features a user-friendly interface for writing, editing, and publishing posts. With Appwrite handling backend operations, you get reliable performance and secure data management. Express yourself, engage with readers, and manage your blog with ease.",
    github: "https://github.com/abdulmossawer/Thoughts-Unbound",
    demo: "https://thoughts-unbound.vercel.app/",
  },


  {
    id: 1,
    title: "NextJs Auth",
    img: "/auth.png",
    video: "/nauth.mp4", // Add the video URL here
    desc: "Implement robust authentication with our Next.js full-stack solution. Seamlessly handle user login and registration with a modern, secure approach, all within a streamlined Next.js application.",
    github: "https://github.com/abdulmossawer/nextjs_auth",
    demo: "https://nextjs-auth-psi-nine.vercel.app/",
  },

  {
    id: 1,
    title: "Currency Converter",
    img: "/currency.png",
    video: "/currencyConverter.mp4", // Add the video URL here
    desc: "Effortlessly convert currencies with our intuitive front-end application. Designed for quick and accurate conversions, it features a sleek interface for easy use and immediate results.",
    github: "https://github.com/abdulmossawer/currencyConverter",
    demo: "https://currency-converter-abdul-mossawers-projects.vercel.app/",
  },

  {
    id: 1,
    title: "Sticky Notes",
    img: "/sticky.png",
    video: "/stickyvid.mp4", // Add the video URL here
    desc: "Keep your thoughts organized with our sticky notes app. Built with JavaScript and local storage, it offers a simple, persistent way to jot down and manage notes directly in your browser.",
    github: "https://github.com/abdulmossawer/sticky-notes",
    demo: "https://sticky-notes-abdul.netlify.app/",
  },
 
];

const Single = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div
          className="wrapper"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="mediaContainer" ref={ref}>
            {isHovered ? (
              <video src={item.video} autoPlay muted loop className="video" />
            ) : (
              <img src={item.img} alt="" />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button>GitHub Repo</button>
              </a>
              <a href={item.demo} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
