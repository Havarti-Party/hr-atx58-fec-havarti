import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//Cards
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import StarRatings from "react-star-ratings";

//Modal

//Icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,
  },
});

export default function OutfitCard({ OutfitObj, updateWardrobe }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <HighlightOffIcon
          onClick={() => {
            updateWardrobe(OutfitObj);
          }}
        />
        <CardMedia
          className={classes.media}
          image={OutfitObj.url}
          title={OutfitObj.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {OutfitObj.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {OutfitObj.description}
          </Typography>
          <StarRatings
            rating={3.75}
            starDimension={"15px"}
            starSpacing={"1px"}
          />
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}
