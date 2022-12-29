import classes from "./styles.module.css";
import { motion, Variants } from "framer-motion";
import { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";

interface Props {
  header: string;
  paragraph: string;
  skill: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ header, paragraph, skill, hueA, hueB }: Props) {
  const { isOn } = useContext(PortfolioContext);
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={classes.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.6 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div
        className={!isOn ? classes.motionCard : classes.darkMotionCard}
        variants={cardVariants}
      >
        <h2>{header}</h2>
        <p className={classes.paragraph}>{paragraph}</p>
        <h4>Technologies</h4>
        <p className={classes.skill}>{skill}</p>
      </motion.div>
    </motion.div>
  );
}

const skills: [string, string, string, number, number][] = [
  [
    "Back-End Developer",
    "Talent for resolving bugs, developing new features, refactoring existing programs, as well as implementing clean quality code",
    "Node.js | Express.js | REST API | MongoDB | Mongoose.js | JWT.js | bcrypt.js",
    340,
    10,
  ],
  [
    "General",
    "Passionate about coding projects from scratch and enjoy bringing ideas to life. keep on learning and improving on a daily basis",
    "GIT | Railway | Vercel | Docker| Linux | Vim ",
    20,
    40,
  ],
  [
    "Front-End Skills",
    "Adept at analyzing requirements to ensure optimal performance, quality, and responsiveness of applications.",
    "TypeScript | JavaScript | React.js | Vite | Next.js | Material UI | Jest | Framer Motion | Scss | Css ",
    60,
    90,
  ],
];

export default function Skills() {
  const { isOn } = useContext(PortfolioContext);
  return (
    <section
      className={!isOn ? classes.skillsSections : classes.darkSkillsSections}
    >
      {skills.map(([header, paragraph, skill, hueA, hueB]) => (
        <Card
          header={header}
          paragraph={paragraph}
          skill={skill}
          hueA={hueA}
          hueB={hueB}
          key={header}
        />
      ))}
    </section>
  );
}
