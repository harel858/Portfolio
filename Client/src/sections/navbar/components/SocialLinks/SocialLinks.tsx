import classes from "./style.module.css";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import PortfolioContext from "../../../../context/portfolioContext";
import { Slide } from "react-awesome-reveal";

const SocialLinks: React.FC = () => {
  const { isOn } = React.useContext(PortfolioContext);
  return (
    <Slide duration={1000}>
      <div className={classes.linksContainer}>
        <motion.button
          className={classes.icon}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.1,
              type: "spring",
              stiffness: 700,
              damping: 7,
            },
          }}
          whileTap={{ scale: 0.9, type: "spring" }}
        >
          <SocialIcon
            className={!isOn ? classes.light : classes.dark}
            url="https://www.upwork.com/freelancers/~01ecb6e5ac0e747e5f"
            target="_blank"
          />
        </motion.button>
        <motion.button
          className={classes.icon}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.1,
              type: "spring",
              stiffness: 700,
              damping: 7,
            },
          }}
          whileTap={{ scale: 0.9, type: "spring" }}
        >
          <SocialIcon
            className={!isOn ? classes.light : classes.dark}
            url="https://github.com/harel858"
            target="_blank"
          />
        </motion.button>
        <motion.button
          className={classes.icon}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.1,
              type: "spring",
              stiffness: 700,
              damping: 7,
            },
          }}
          whileTap={{ scale: 0.9, type: "spring" }}
        >
          <SocialIcon
            className={!isOn ? classes.light : classes.dark}
            url="https://www.linkedin.com/in/harel-levi-53744017b/"
            target="_blank"
          />
        </motion.button>
      </div>
    </Slide>
  );
};
export default SocialLinks;
