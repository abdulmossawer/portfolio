import Test from "./Test";
import "./app.scss";
import AboutUs from "./components/about/AboutUs";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";  // Ensure correct case
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import SkillGrid from "./components/services/SkillGrid";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <SkillGrid />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section>
        <AboutUs id="About"/>
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;