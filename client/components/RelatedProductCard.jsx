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

//Icons
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

//Hard Coded Features
let features = ["blue", "satin", "something extra cool!!", "not as cool!"];

export default function RelatedProductCard({ RelatedObj, updatedWardrobe }) {
  //useContext
  const [overviewProduct, setOverviewProduct] = useContext(ProductsContext);

  //State
  const [open, setOpen] = React.useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [compareFeatures, setCompareFeatures] = useState([]);
  const [clickedStar, setClickedStar] = useState(false);
  const [relatedProductFeatures, setRelatedProductFeatures] = useState([]);
  const [overviewProductFeatures, setOverviewProductFeatures] = useState([]);

  const isInitialMount = useRef(true);

  const handleStarClick = (relatedProduct) => {
    let relatedProductFeaturesArr = [];
    let overviewProductFeaturesArr = [];

    if (relatedProduct.features && overviewProduct.features) {
      relatedProduct.features.forEach((feature) => {
        relatedProductFeaturesArr.push(feature.feature);
      });

      overviewProduct.features.forEach((feature) => {
        overviewProductFeaturesArr.push(feature.feature);
      });

      let combinedFeatures = [
        ...new Set([
          ...relatedProductFeaturesArr,
          ...overviewProductFeaturesArr,
        ]),
      ];

      setOverviewProductFeatures(overviewProductFeaturesArr);
      setRelatedProductFeatures(relatedProductFeaturesArr);
      setCompareFeatures(combinedFeatures);
    } else if (relatedProduct.features) {
      relatedProduct.features.forEach((feature) => {
        relatedProductFeaturesArr.push(feature.feature);
      });
      setRelatedProductFeatures(relatedProductFeaturesArr);
      setCompareFeatures(relatedProductFeaturesArr);
    } else if (overviewProduct.features) {
      overviewProduct.features.forEach((feature) => {
        overviewProductFeaturesArr.push(feature.feature);
      });

      setOverviewProductFeatures(overviewProductFeaturesArr);
      setCompareFeatures(overviewProductFeaturesArr);
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
      <CardActionArea>
        <div
          onClick={() => {
            handleStarClick(RelatedObj);
          }}
        >
          {clickedStar ? <StarIcon /> : <StarBorderIcon />}
        </div>
        <CardMedia
          className={classes.media}
          component="img"
          image={RelatedObj.url}
          onClick={() => {
            setOverviewProduct(RelatedObj);
          }}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {RelatedObj.name}
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
