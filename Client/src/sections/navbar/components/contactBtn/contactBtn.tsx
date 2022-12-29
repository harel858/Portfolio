import classes from "./style.module.css";
import React from "react";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import { IParallax } from "@react-spring/parallax";

type currentRef = {
  currentRef: React.RefObject<IParallax>;
};

const ContactBtn: React.FC<currentRef> = (props: currentRef) => {
  return (
    <Slide duration={700}>
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
        onClick={() => props.currentRef.current?.scrollTo(4.92)}
      >
        Contact
      </motion.button>
    </Slide>
  );
};

export default ContactBtn;
