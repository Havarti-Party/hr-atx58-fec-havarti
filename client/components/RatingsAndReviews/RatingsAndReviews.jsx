import React, { useState, useContext, useEffect } from "react";
import StarRatings from "react-star-ratings";
import Grid from "@material-ui/core/Grid";
import RatingBreakdownBars from "./RARRatingBreakdownBars.jsx";
import ReviewSorter from "./RARReviewSorter.jsx";
import ReviewDisplay from "./RARReviewDisplay.jsx";
import { ProductsContext } from "../ProductsContext";
import RecommendRatio from "./RARRecommendRatio.jsx";
import FactorBarsDisplay from "./RARFactorBarsDisplay.jsx";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line no-undef
const axios = require("axios");

export default function RatingsAndReviews() {
  const { overviewProduct } = useContext(ProductsContext);
  // eslint-disable-next-line no-unused-vars
  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const { starRating } = useContext(ProductsContext);
  const [starRatingState, setStarRating] = starRating;
  const [sorter, setSorter] = useState("relevance");
  const [currentReviews, setCurrentReviews] = useState({});
  // const [averageStarRating, updateAverageStarRating] = useState(0);
  const [isLoading, setLoading] = useState(true);
  // const [recommendRatio, setRecommendRatio] = useState(0);
  // const isMounted = useRef(false);

  useEffect(() => {
    axios
      .get("/reviewtotal", {
        params: {
          ID: overviewProductState.id,
        },
      })
      .then((reviewData) => {
        setCurrentReviews(reviewData.data);
        setLoading(false);
        // console.log(reviewData.data);
      })
      .catch((error) => {
        console.log("Error while fetching reviews: ", error);
      });
  }, [overviewProductState]);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  } else {
    return (
      //style={{transform: "translate(80px, -65px)"}}
      <>
        <Typography variant="h3" id="ratings-and-reviews">Ratings And Reviews</Typography>
        <Grid container spacing={6}>
          <Grid item xs={5} s={5} m={5} lg={5} xl={5} className="RARLeftColumn">
            <Typography display="inline" fontSize="50px">{starRatingState.toFixed(1)}{" "}</Typography>
            <div style={{position:"relative", left: "80px", top:"-65px", marginBottom:"-50px"}}>
              <StarRatings
                rating={starRatingState}
                starDimension={"50px"}
                starSpacing={"1px"}
                starRatedColor={'gold'}
                />
              </div>
            <RecommendRatio currentReviews={currentReviews} style={{buffer: '10px'}}/>
            <RatingBreakdownBars
              setStarRating={setStarRating}
              currentReviews={currentReviews}
              overviewProduct={overviewProduct}
            />
            <FactorBarsDisplay currentReviews={currentReviews} />
          </Grid>
          <Grid
            item
            xs={7}
            s={7}
            m={7}
            lg={7}
            xl={7}
            className="RARRightColumn"
          >
            <ReviewSorter
              currentReviews={currentReviews}
              setCurrentReviews={setCurrentReviews}
              sorter={sorter}
              setSorter={setSorter}
            />
            <ReviewDisplay
              currentReviews={currentReviews}
              setCurrentReviews={setCurrentReviews}
              currentProduct={overviewProduct}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
