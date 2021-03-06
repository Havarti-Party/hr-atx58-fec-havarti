/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useContext } from "react";
import { ProductsContext } from "../ProductsContext.jsx";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
//Files
import noImage from "./No-Image-Found.jpg";

//Material UI
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

//Icons
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 250,
  },
  iconDepth: {
    zIndex: 1,
  },
});

export default function OutfitCard({ OutfitObj, remove }) {
  const classes = useStyles();
  //useContext
  const {
    overviewProduct,
    clickedComponent,
    clickedElement,
    clickTracker,
    selectedStyleState,
  } = useContext(ProductsContext);

  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const [selectedStyle, setSelectedStyle] = selectedStyleState;
  const [clickTrackerFunc] = clickTracker;

  return (
    <Card
      onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Outfit List Item", event.target)
      }
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={
          OutfitObj.photos[0].thumbnail_url
            ? OutfitObj.photos[0].thumbnail_url
            : noImage
        }
        title={OutfitObj.name}
      >
        <Grid container direction="column" alignItems="flex-end">
          <Grid item>
            <HighlightOffIcon
              style={{ fill: "black", fontSize: 45 }}
              onClick={() => {
                remove(OutfitObj);
              }}
            />
          </Grid>
        </Grid>
      </CardMedia>
      <CardActionArea>
        <CardContent
          onClick={() => {
            setOverviewProductState(OutfitObj.overviewProduct);
            setSelectedStyle(OutfitObj.selectedStyleObj);
          }}
        >
          <Typography gutterBottom variant="body1" component="h2">
            {OutfitObj.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="h2">
            {OutfitObj.category}
          </Typography>

          {OutfitObj.sale_price ? (
            <>
              <strike>
                <Typography
                  className={{ textDecoration: "line-through" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  ${OutfitObj.original_price}
                </Typography>
              </strike>
              <Typography
                variant="body2"
                style={{ color: "red" }}
                component="div"
              >
                On sale!! ${OutfitObj.sale_price}{" "}
              </Typography>
            </>
          ) : (
            <Typography variant="body2" color="textSecondary" component="p">
              ${OutfitObj.original_price}
            </Typography>
          )}

          <Typography variant="body2" color="textSecondary" component="p">
            {OutfitObj.description}
          </Typography>
          {/* <StarRatings
            rating={3.75}
            starDimension={"15px"}
            starSpacing={"1px"}
          /> */}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

OutfitCard.propTypes = {
  remove: PropTypes.func.isRequired,
  OutfitObj: PropTypes.object,
};
