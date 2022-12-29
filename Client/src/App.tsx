import classes from "./app.module.css";
import React, { useContext, useRef } from "react";
import NavBar from "./sections/navbar/NavBar";
import About from "./sections/about/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Footer from "./sections/Footer/Footer";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Hamburger } from "./sections/navbar/components/Hamburger/Hamburger";
import Contact from "./sections/Contact/Contcat";
import PortfolioContext from "./context/portfolioContext";

const App: React.FC = () => {
  const { isOn } = useContext(PortfolioContext);
  const ref = useRef<IParallax>(null);
  return (
    <main className={classes.main}>
      <div className={classes.navbar}>
        <Hamburger currentRef={ref} />
        <NavBar currentRef={ref} />
      </div>

      <Parallax ref={ref} pages={6.5}>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `beige`,
                }
              : {
                  backgroundColor: `black`,
                }
          }
          speed={1}
          offset={0}
          factor={4}
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid black`,
                  borderBottom: `1px solid black`,
                }
              : {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid beige`,
                  borderBottom: `1px solid beige`,
                }
          }
          speed={0.05}
          factor={1.9}
          offset={1.4}
        >
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `beige`,
                }
              : {
                  backgroundColor: `black`,
                }
          }
          speed={0.05}
          factor={3}
          offset={3.25}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid black`,
                  borderBottom: `1px solid black`,
                }
              : {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid beige`,
                  borderBottom: `1px solid beige`,
                }
          }
          speed={0.5}
          factor={2}
          offset={5}
        >
          <Contact />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default App;
