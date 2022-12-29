import React, { useContext } from "react";
import classes from "./style.module.css";
import ShiftManager from "./components/ShiftManager/ShiftManager";
import PortfolioContext from "../../context/portfolioContext";
import { Slide } from "react-awesome-reveal";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

const Projects: React.FC = () => {
  const { isOn } = useContext(PortfolioContext);

  const displayCards = () => {
    const features = [
      "Track working hours",
      "Calculate monthly salary in real time",
      "Editing options when necessary",
      "Automatic calculation of income tax and overtime payments",
    ];
    return (
      <div className={!isOn ? classes.article : classes.darkArticle}>
        {features.map<ReactJSXElement>((feature, i) => (
          <Slide key={i} delay={100} direction="up">
            <p>{feature}</p>
          </Slide>
        ))}
      </div>
    );
  };

  return (
    <section
      className={!isOn ? classes.projectsSection : classes.darkProjectsSection}
    >
      <Slide>
        <h1>
          Most Resent <span>Project</span>
        </h1>
      </Slide>
      <div className={classes.projectContainer}>
        <ShiftManager />
        {displayCards()}
      </div>
    </section>
  );
};
export default Projects;
