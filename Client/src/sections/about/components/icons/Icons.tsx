import classes from "./style.module.css";
import React from "react";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMaterialui,
  SiTypescript,
} from "react-icons/si";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import { DiVim, DiLinux } from "react-icons/di";
const Icons: React.FC = () => {
  return (
    <div className={classes.container}>
      <SiJavascript />
      <FaNode />
      <SiExpress />
      <SiMongodb />
      <FaHtml5 />
      <FaReact />
      <FaCss3 />
      <SiTypescript />
      <FaSass />
      <FaGithub />
      <DiVim />
      <DiLinux />
      <SiMaterialui />
    </div>
  );
};

export default Icons;
