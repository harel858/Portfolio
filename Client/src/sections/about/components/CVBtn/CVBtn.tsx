import classes from "./style.module.css";
import React from "react";
import { motion } from "framer-motion";
import { Roll } from "react-awesome-reveal";
import file from "../../../../../Harel-Levi-CV.pdf";
const ContactBtn: React.FC = () => {
  return (
    <Roll>
      <a href={file} download={file}>
        <motion.button
          className={classes.contactBtn}
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
          Download My CV
        </motion.button>
      </a>
    </Roll>
  );
};

export default ContactBtn;
