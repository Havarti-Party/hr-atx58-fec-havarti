import React from 'react';

const OutfitCard = ({ imgObj }) => {

  return (
    <div className="card">
      <h5> {imgObj.sampleText} </h5>
      <img className="stock" src={imgObj.imgSrc} />
    </div>
  )

}

export default OutfitCard;