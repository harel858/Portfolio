import React, { useContext } from "react";
import ContactBtn from "./components/contactBtn/contactBtn";
import LightBtn from "./components/lightBtn/LightBtn";
import classes from "./style.module.css";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import PortfolioContext from "../../context/portfolioContext";
import { IParallax } from "@react-spring/parallax";

type currentRef = {
  currentRef: React.RefObject<IParallax>;
};

const NavBar: React.FC<currentRef> = (props: currentRef) => {
  const { isOn } = useContext(PortfolioContext);
  return (
    <nav className={!isOn ? classes.nav : classes.darkNav}>
      <SocialLinks />
      <div className={classes.btnContainer}>
        <ContactBtn currentRef={props.currentRef} />
        <LightBtn />
      </div>
    </nav>
  );
};
export default NavBar;
