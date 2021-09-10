import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function ProductOverview(props) {
  return (
    <>
    <Grid container>
      <Grid item md={8}>
          <img src="../images/mainImage.png" alt="Main Image" width="100%" />
          <img src="../images/description.png" alt="Description 1" width="100%" />
      </Grid>
      <Grid item md={4}>
          <img src="../images/stars.png" alt="Star Rating" width="70%" />
          <img src="../images/productDetails.png" alt="Product Details" width="90%" />
          <img src="../images/styles.png" alt="Styles" width="100%" />
          <img src="../images/addToCart.png" alt="Add to cart" width="100%" />
          <img src="../images/description2.png" alt="Description 2" width="100%" />
      </Grid>
    </Grid>
    </>
  )
}