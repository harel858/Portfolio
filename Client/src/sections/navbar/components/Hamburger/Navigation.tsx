import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import classes from "./style.module.css";
import { IParallax } from "@react-spring/parallax";

type currentRef = {
  currentRef: React.RefObject<IParallax>;
  toggle: any;
  isOpen: boolean;
};
type ItemObj = [
  { section: string },
  { section: string },
  { section: string },
  { section: string }
];
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemsObj: ItemObj = [
  { section: "About" },
  { section: "Skills" },
  { section: "Projects" },
  { section: "Contact" },
];

export const Navigation = (props: currentRef) => (
  <motion.ul
    style={!props.isOpen ? { display: `none` } : { display: `flex` }}
    className={classes.ul}
    variants={variants}
  >
    {itemsObj.map((item: {}, i: number) => (
      <MenuItem
        toggle={() => props.toggle()}
        currentRef={props.currentRef}
        item={item}
        i={i}
        key={i}
      />
    ))}
  </motion.ul>
);
