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

      <Parallax ref={ref} pages={9}>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `rgb(237, 234, 222)`,
                }
              : {
                  backgroundColor: `	#36393e`,
                }
          }
          speed={1}
          offset={0}
          factor={2.5}
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid 	#36393e`,
                  borderBottom: `1px solid black`,
                  minHeight: `80rem`,
                }
              : {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid beige`,
                  borderBottom: `1px solid beige`,
                  minHeight: `80rem`,
                }
          }
          speed={0.05}
          factor={1}
          offset={2.5}
        >
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `rgb(237, 234, 222)`,
                  minHeight: `fit-content`,
                }
              : {
                  backgroundColor: `	#36393e`,
                  minHeight: `fit-content`,
                }
          }
          speed={0.05}
          factor={1}
          offset={4.8}
        >
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer
          style={
            !isOn
              ? {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid 	#36393e`,
                  borderBottom: `1px solid 	#36393e`,
                  minHeight: `fit-content`,
                }
              : {
                  backgroundColor: `#0072b1`,
                  borderTop: ` 1px solid beige`,
                  borderBottom: `1px solid beige`,
                  minHeight: `fit-content`,
                }
          }
          speed={0.5}
          factor={3}
          offset={7}
        >
          <Contact />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
};

export default App;
