import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import classes from "./style.module.css";
type props = {
  toggle: () => any;
  backgroundRef: any;
  isOpen: any;
  containerRef: React.RefObject<any>;
};
const Path = (
  props: JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>
) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle: React.FC<props> = ({
  toggle,
  backgroundRef,
  isOpen,
  containerRef,
}) => {
  function toggleBackground() {
    if (isOpen)
      setTimeout(() => {
        backgroundRef.current.style.position = "absolute";
        containerRef.current.style.zIndex = "none";
      }, 1000);

    if (!isOpen) {
      backgroundRef.current.style.position = "fixed";
      containerRef.current.style.zIndex = "9";
    }

    toggle();
  }

  return (
    <button className={classes.button} onClick={toggleBackground}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
