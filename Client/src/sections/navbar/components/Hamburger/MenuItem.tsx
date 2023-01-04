import * as React from "react";
import { motion } from "framer-motion";
import classes from "./style.module.css";
import { IParallax } from "@react-spring/parallax";

type itemProps = {
  currentRef: React.RefObject<IParallax>;
  item: any;
  i: number;
  toggle: () => any;
  backgroundRef: any;
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

/* const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]; */

export const MenuItem = (props: itemProps) => {
  const { section } = props.item;

  const handleClick = () => {
    if (props.i === 0) props.currentRef?.current?.scrollTo(0);
    if (props.i === 1) props.currentRef?.current?.scrollTo(2.4);
    if (props.i === 2) props.currentRef?.current?.scrollTo(4.7);
    if (props.i === 3) props.currentRef?.current?.scrollTo(6.95);
    props.backgroundRef.current.style.position = "absolute";
    return props.toggle();
  };

  return (
    <motion.li
      className={classes.li}
      variants={variants}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
    >
      <motion.h3
        whileHover={{
          scale: 1.2,
          color: "black",
          textDecoration: `underline`,
        }}
      >
        {section}
      </motion.h3>
    </motion.li>
  );
};
