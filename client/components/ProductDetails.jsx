import React from 'react';
import Grid from '@material-ui/core/Grid';

const ProductDetails = ({ category, name, price }) => {

  return (
    <>
      <Grid item md={12} id="category">
        {category}
      </Grid>
      <Grid item md={12} id="product-name">
        <h1>{name}</h1>
      </Grid>
      <Grid item md={12} id="price">
        <h4>${price}</h4>
      </Grid>
    </>
  )
}

export default ProductDetails;