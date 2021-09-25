import React from "react";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function RecommendRatio(props) {
  var recommendRatio = 0;

  if (props.currentReviews.recommended) {
    recommendRatio =
      (100 * Number(props.currentReviews.recommended.true)) /
      (Number(props.currentReviews.recommended.true) +
        Number(props.currentReviews.recommended.false));
  } else {
    recommendRatio = 0;
  }

  if (isNaN(recommendRatio)) {
    recommendRatio = 0;
  }
  return (
    <div style={{marginBottom: "15px"}}>

      <Typography>
        {recommendRatio.toFixed(0)}% of reviews recommend this product
      </Typography>
    </div>
  );
}

RecommendRatio.propTypes = {
  currentReviews: PropTypes.object,
};
