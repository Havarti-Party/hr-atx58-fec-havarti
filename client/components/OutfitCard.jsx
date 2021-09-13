import React from 'react';

const OutfitCard = ({ imgObj }) => {

  return (
    <div className="card">
      <h5> {imgObj.sampleText} </h5>
      <img className="stock" src={imgObj.imgSrc} />
      <h5>Description will go here </h5>
    </div>
  )

}

export default OutfitCard;