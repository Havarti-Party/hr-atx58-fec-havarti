import React, { useContext } from "react";
import StarRatings from "react-star-ratings";
import { ProductsContext } from "../ProductsContext";

export default function AverageStarRating() {
  const { starRating } = useContext(ProductsContext);
  const [starRatingState] = starRating;

  return (
    <StarRatings
      rating={starRatingState}
      starDimension={"15px"}
      starSpacing={"1px"}
    />
  );
}
