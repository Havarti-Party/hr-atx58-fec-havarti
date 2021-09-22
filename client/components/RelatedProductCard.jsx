import React, { useState, useEffect, useRef, useContext } from "react";
import { ProductsContext } from "./ProductsContext.jsx";
import ModalPopup from "./CompareModal.jsx";

//Card Features
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import StarRatings from "react-star-ratings";
import { positions } from "@material-ui/system";

//Grid
import Grid from "@material-ui/core/Grid";

//Icons
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

//Image
const noImage = require("../../dist/Images/No-Image-Found.jpg");

//Hard Coded Features
let features = ["blue", "satin", "something extra cool!!", "not as cool!"];

export default function RelatedProductCard({ RelatedObj, updatedWardrobe }) {
  //useContext
  const { overviewProduct } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;

  //State
  const [open, setOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [compareFeatures, setCompareFeatures] = useState([]);
  const [clickedStar, setClickedStar] = useState(false);
  const [relatedProductFeatures, setRelatedProductFeatures] = useState([]);
  const [overviewProductFeatures, setOverviewProductFeatures] = useState([]);

  const isInitialMount = useRef(true);

  const handleStarClick = (relatedProduct) => {
    let relatedProductFeaturesObj = {};
    let overviewProductFeaturesObj = {};
    let combinedFeatures = [];

    if (relatedProduct.features && overviewProductState.features) {
      relatedProduct.features.forEach((feature) => {
        combinedFeatures.push(feature.feature);
        relatedProductFeaturesObj[feature.feature] = feature.value;
      });

      overviewProductState.features.forEach((feature) => {
        combinedFeatures.push(feature.feature);
        overviewProductFeaturesObj[feature.feature] = feature.value;
      });

      setOverviewProductFeatures(overviewProductFeaturesObj);
      setRelatedProductFeatures(relatedProductFeaturesObj);
      setCompareFeatures(combinedFeatures);
    } else if (relatedProduct.features) {
      relatedProduct.features.forEach((feature) => {
        combinedFeatures.push(feature.feature);
        relatedProductFeaturesObj[feature.feature] = feature.value;
      });
      setRelatedProductFeatures(relatedProductFeaturesObj);
      let temp = Object.keys(relatedProductFeaturesObj);
      setCompareFeatures(temp);
    } else if (overviewProductState.features) {
      overviewProductState.features.forEach((feature) => {
        combinedFeatures.push(feature.feature);
        overviewProductFeaturesObj[feature.feature] = feature.value;
      });

      setOverviewProductFeatures(overviewProductFeaturesObj);
      let temp = Object.keys(relatedProductFeaturesObj);
      setCompareFeatures(temp);
    } else {
      setCompareFeatures(["no features to compare!"]);
    }
    setClickedStar(true);
    handleClickOpen();
  };

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setClickedStar(false);
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={RelatedObj.url ? RelatedObj.url : noImage}
      >
        <Grid container direction="column" alignItems="flex-end">
          <Grid item>
            {clickedStar ? (
              <StarBorderIcon
                className={classes.iconDepth}
                onClick={() => {
                  handleStarClick(RelatedObj);
                }}
                style={{ fill: "white" }}
              />
            ) : (
              <StarIcon
                className={classes.iconDepth}
                onClick={() => {
                  handleStarClick(RelatedObj);
                }}
                style={{ fill: "white" }}
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
          <Typography gutterBottom variant="title" component="h2">
            {RelatedObj.name}
          </Typography>
          <Typography gutterBottom variant="subtitle" component="p">
            {RelatedObj.category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RelatedObj.default_price}
            {RelatedObj.sale_price ? RelatedObj.sale_price : ""}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RelatedObj.description}
          </Typography>
          <StarRatings rating={2} starDimension={"15px"} starSpacing={"1px"} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalPopup
          compareFeatures={compareFeatures}
          relatedProductFeatures={relatedProductFeatures}
          overviewProductFeatures={overviewProductFeatures}
          open={open}
          onClose={handleClose}
        />
      </CardActions>
    </Card>
  );
}
