import classes from "./styles.module.css";
import React, { useContext } from "react";
import PortfolioContext from "../../../../context/portfolioContext";
import { motion } from "framer-motion";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";

const LightBtn: React.FC = () => {
  const { isOn, setIsOn } = useContext(PortfolioContext);
  const toggleSwitch = () => setIsOn(!isOn);

  if (!isOn) document.body.id = "light";
  if (isOn) document.body.id = "dark";

  return (
    <Slide duration={400}>
      <motion.div
        whileHover={{
          scale: 1.2,
          transition: {
            duration: 0.1,
            type: "spring",
            stiffness: 700,
            damping: 7,
          },
        }}
        className={classes.switch}
        data-ison={isOn}
        onClick={toggleSwitch}
      >
        <BsFillSunFill className={classes.sunIcon} />
        <BsMoonFill className={classes.moonIcon} />
        <motion.div className={classes.handle} layout transition={spring} />
      </motion.div>
    </Slide>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LightBtn;
