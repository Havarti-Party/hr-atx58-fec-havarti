import React, { useState, useContext, useEffect } from "react";
import StarRatings from "react-star-ratings";
import Grid from "@material-ui/core/Grid";
import RatingBreakdownBars from "./RARRatingBreakdownBars.jsx";
import ReviewSorter from "./RARReviewSorter.jsx";
import ReviewDisplay from "./RARReviewDisplay.jsx";
import { ProductsContext } from "../ProductsContext";
import RecommendRatio from "./RARRecommendRatio.jsx";
import FactorBarsDisplay from "./RARFactorBarsDisplay.jsx";

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
      <>
        <h3 id="ratings-and-reviews">Ratings And Reviews</h3>
        <Grid container spacing={6}>
          <Grid item xs={6} s={6} m={6} lg={6} xl={6} className="RARLeftColumn">
            <RecommendRatio currentReviews={currentReviews} />
            {starRatingState}{" "}
            <StarRatings
              rating={starRatingState}
              starDimension={"15px"}
              starSpacing={"1px"}
            />
            <RatingBreakdownBars
              setStarRating={setStarRating}
              currentReviews={currentReviews}
              overviewProduct={overviewProduct}
            />
            <FactorBarsDisplay currentReviews={currentReviews} />
          </Grid>
          <Grid
            item
            xs={6}
            s={6}
            m={6}
            lg={6}
            xl={6}
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
