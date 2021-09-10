import React from 'react';

export default function ProductOverview(props) {
  return (
    <>
    <h1>Product Overview</h1>
    <div className="productOverview">
      <div className="row1">
        <div className="column1">
          <img src="../images/mainImage.png" alt="Main Image" />
        </div>
        <div className="column2">
          <img src="../images/stars.png" alt="Star Rating" />
          <img src="../images/productDetails.png" alt="Product Details" />
          <img src="../images/styles.png" alt="Styles" />
          <img src="../images/addToCart.png" alt="Add to cart" />
        </div>
      </div>
    </div>
    <div className="row2">
      <div className="column1">
        <img src="../images/description.png" alt="Description 1" />
      </div>
      <div className="column2">
        <img src="../images/description2.png" alt="Description 2" />
      </div>
    </div>
    </>
  )
}