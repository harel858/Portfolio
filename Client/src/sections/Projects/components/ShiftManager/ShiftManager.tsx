import React, { useContext } from "react";
import classes from "./styles.module.css";
import { Bounce } from "react-awesome-reveal";
import img from "../../../../assets/no.png";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import PortfolioContext from "../../../../context/portfolioContext";

const ShiftManager: React.FC = () => {
  const { isOn } = useContext(PortfolioContext);
  return (
    <Bounce duration={1000}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={!isOn ? classes.card : classes.darkCard}
      >
        <div className={classes.cardContent}>
          <h2 className={classes.cardTitle}>Shift Manager</h2>
          <p className={classes.cardBody}>
            "Your Shift is a comprehensive app for tracking working hours and
            salary. It calculates tax and overtime automatically, streamlining
            payroll for employees and employers. Try it today and take control
            of your working hours and earnings."
          </p>
          <div className={classes.btnContainer}>
            <a
              href="https://kindly-mint-production.up.railway.app/"
              target={"_blank"}
              className={classes.button}
            >
              Learn More
            </a>
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
                className={classes.githubBtn}
                url="https://github.com/harel858"
                target="_blank"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </Bounce>
  );
};
export default ShiftManager;
