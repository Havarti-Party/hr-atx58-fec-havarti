import React from 'react';
import Grid from '@material-ui/core/Grid';

const ProductDetails = ({ category, name, defaultPrice, selectedStylePrice }) => {

  return (
    <>
      <Grid item md={12} id="category">
        {category}
      </Grid>
      <Grid item md={12} id="product-name">
        <h1>{name}</h1>
      </Grid>
      <Grid item md={12} id="price">
        {selectedStylePrice >= defaultPrice ?
          <h4>${defaultPrice}</h4>
          :
          <h4>${selectedStylePrice} <strike>${defaultPrice}</strike></h4>
        }
      </Grid>
    </>
  )
}

export default ProductDetails;