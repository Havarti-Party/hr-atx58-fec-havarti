import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShareOnSocial from './ShareOnSocial';

const ProductDetails = ({ category, name, originalPrice, salePrice }) => {

  return (
    <>
      <Grid item md={12} id="category">
        {category}
      </Grid>
      <Grid item md={12} id="product-name">
        <h1>{name}</h1>
      </Grid>
      <Grid item md={12} id="price">
        {salePrice === null ?
          <h4>${originalPrice}</h4>
          :
          <h4>${salePrice} <strike>${originalPrice}</strike></h4>
        }
      </Grid>
      <ShareOnSocial />
    </>
  )
}

export default ProductDetails;