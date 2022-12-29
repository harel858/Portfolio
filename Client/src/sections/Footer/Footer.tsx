import React from "react";
import classes from "./style.module.css";
import { motion } from "framer-motion";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <a href="mailto:harellevi85@gmail.com">
        <motion.button
          whileHover={{
            color: `black`,
            textDecoration: `underline`,
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
          <FiMail /> Harellevi85@gmail.com
        </motion.button>
      </a>
      <a href="tel:0537761400">
        <motion.button
          whileHover={{
            color: `black`,
            textDecoration: `underline`,
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
          <BsFillTelephoneOutboundFill /> 053-7761400
        </motion.button>
      </a>
    </footer>
  );
};
export default Footer;
