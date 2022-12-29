import classes from "./style.module.css";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import CVBtn from "./components/CVBtn/CVBtn";
import { Fade } from "react-awesome-reveal";
import ProfileCard from "./components/card/ProfileCard";
import Icons from "./components/icons/Icons";

const About: React.FC = () => {
  return (
    <section className={classes.aboutContainer}>
      <div className={classes.intro}>
        <TypeAnimation
          sequence={[
            "<h1>Hi, My name is Harel!</h1>", // Types 'One'
            2000, // Waits 1s
            "<h1>I'm  A full stack Engineer</h1>", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "<h1>Mainly using the MERN stack</h1>",
            2000, // Types 'Three' without deleting 'Two'
            /*   () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            }, */
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: "2em",
            fontFamily: "monospace",
            fontWeight: "bold",
            color: "#0072b1",
          }}
        />
        <Fade className={classes.p} delay={0} cascade damping={0.02}>
          Versatile and tech-savvy professional with hand-on experience in
          Fullstack web development.
        </Fade>

        <Fade className={classes.p} delay={0} cascade damping={0.02}>
          With a flair for writing elegant code, and delivering quality products
          according to customer needs.
        </Fade>
        <CVBtn />
        <Icons />
      </div>
      <ProfileCard />
    </section>
  );
};

export default About;
