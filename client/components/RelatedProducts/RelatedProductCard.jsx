/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect, useRef, useContext } from "react";
import { ProductsContext } from "../ProductsContext.jsx";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";
//Files
import ModalPopup from "./CompareModal.jsx";
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
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

export default function RelatedProductCard({ RelatedObj, updatedWardrobe }) {
  //useContext
  const { overviewProduct, clickTracker } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const [clickTrackerFunc] = clickTracker;

  //State
  const [open, setOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [compareFeatures, setCompareFeatures] = useState([]);
  const [clickedStar, setClickedStar] = useState(false);
  const [relatedProductName, updateRelatedProductName] = useState("");
  const [relatedProductFeatures, setRelatedProductFeatures] = useState({});
  const [overviewProductFeatures, setOverviewProductFeatures] = useState({});

  const isInitialMount = useRef(true);
  //Component Updates
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (Object.values(currentItem).length > 0) {
        setCurrentItem({});
        updatedWardrobe(currentItem, clickedStar);
      }
    }
  });
  //Functions
  const handleStarClick = (relatedProduct) => {
    let relatedProductFeaturesObj = {};
    let overviewProductFeaturesObj = {};
    let combinedFeatures = [];

    relatedProduct.features.forEach((feature) => {
      combinedFeatures.push(feature.feature);
      relatedProductFeaturesObj[feature.feature] = feature.value;
    });

    overviewProductState.features.forEach((feature) => {
      combinedFeatures.push(feature.feature);
      overviewProductFeaturesObj[feature.feature] = feature.value;
    });
    updateRelatedProductName(relatedProduct.name);
    setOverviewProductFeatures(overviewProductFeaturesObj);
    setRelatedProductFeatures(relatedProductFeaturesObj);
    setCompareFeatures(combinedFeatures);

    setClickedStar(true);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setClickedStar(false);
    setOpen(false);
  };

  //Styling
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 250,
    },
    iconDepth: {
      zIndex: 1,
      marginLeft: "auto",
    },
  });

  const classes = useStyles();

  return (
    <Card
      onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Related Products", event.target)
      }
      className={classes.root}
    >
      <CardMedia
        className={classes.media}
        image={RelatedObj.url ? RelatedObj.url : noImage}
      >
        <Grid container direction="column" alignItems="flex-end">
          <Grid id="starClick" item>
            {clickedStar ? (
              <StarBorderIcon
                className={classes.iconDepth}
                onClick={() => {
                  handleStarClick(RelatedObj);
                }}
                color="primary"
                style={{ fontSize: 45, color: "rgb(73, 137, 199)" }}
              />
            ) : (
              <StarIcon
                className={classes.iconDepth}
                onClick={() => {
                  handleStarClick(RelatedObj);
                }}
                color="primary"
                style={{ fontSize: 45, color: "rgb(73, 137, 199)" }}
              />
            )}
          </Grid>
        </Grid>
      </CardMedia>
      <CardActionArea>
        <CardContent
          onClick={() => {
            setOverviewProductState(RelatedObj);
          }}
        >
          <Typography gutterBottom variant="body1" component="h2">
            {RelatedObj.name}
          </Typography>
          <Typography gutterBottom variant="caption" component="h2">
            {RelatedObj.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ${RelatedObj.default_price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RelatedObj.description}
          </Typography>
          {/* <StarRatings rating={2} starDimension={"15px"} starSpacing={"1px"} /> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalPopup
          maxWidth={"lg"}
          compareFeatures={compareFeatures}
          relatedProductName={relatedProductName}
          relatedProductFeatures={relatedProductFeatures}
          overviewProductFeatures={overviewProductFeatures}
          open={open}
          onClose={handleClose}
        />
      </CardActions>
    </Card>
  );
}

RelatedProductCard.propTypes = {
  updatedWardrobe: PropTypes.func,
  RelatedObj: PropTypes.object,
};
