import classes from "./style.module.css";
import * as React from "react";
import { Fade } from "react-awesome-reveal";
import Form from "./components/Form";

const Contact: React.FC = () => {
  return (
    <>
      <section className={classes.contactSection}>
        <h1>
          <Fade delay={0} cascade damping={0.02}>
            Let's keep in touch
          </Fade>
          <br />
          <span className={classes.span}>
            <Fade delay={400} cascade damping={0.02}>
              Contact Me
            </Fade>
          </span>
        </h1>
        <Form />
      </section>
    </>
  );
};

export default Contact;
