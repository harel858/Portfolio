import * as React from "react";
import classes from "./style.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image from "../../../../assets/profile.jpg";
import { Roll } from "react-awesome-reveal";
import PortfolioContext from "../../../../context/portfolioContext";

const ProfileCard: React.FC<{}> = () => {
  const { isOn } = React.useContext(PortfolioContext);

  return (
    <Roll className={classes.cardContainer}>
      <Card
        className={!isOn ? classes.card : classes.darkCard}
        sx={{ maxWidth: 345 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Harel Levi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Very pleasant, I'm Harel, 21 years old, from Rosh Ha'Ain, Central
              District. Bootcamp graduated and autodidact talented with passion
              for delivering elegant solutions.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Roll>
  );
};

export default ProfileCard;
