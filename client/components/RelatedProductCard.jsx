import React from 'react';

const RelatedProductCard = ({ imgObj }) => {

  return (
    <div className="card">
      <h5> {imgObj.sampleText} </h5>
      <img className="stock" src={imgObj.imgSrc} />
    </div>
  )

}

export default RelatedProductCard;