import React from 'react';
import StarRatings from 'react-star-ratings';

const RelatedProductCard = ({ imgObj }) => {

  return (
    <div className="card">
      <h5> {imgObj.sampleText} </h5>
      <img className="stock" src={imgObj.imgSrc} />
      <StarRatings
        rating={2}
        starDimension={'15px'}
        starSpacing={'1px'}
      />
      <h5>Description will go here </h5>
    </div>
  )

}

export default RelatedProductCard;