import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainImageCarousel from './MainImageCarousel.jsx';
import AverageStarRating from './AverageStarRating.jsx';

export default function ProductOverview(props) {
  return (
    <>
    <Grid container>
      <Grid item md={8}>
          <MainImageCarousel />
      </Grid>
      <Grid item md={4}>
          <AverageStarRating /><a href=""
          onClick={(e) => {
            e.preventDefault()
            const ratingsAndReviews = document.querySelector('#ratings-and-reviews')
            ratingsAndReviews.scrollIntoView({ behavior: 'smooth'})
          }}
          style={{fontSize: '12px'}} >Read All Reviews</a>
          <img src="../images/productDetails.png" alt="Product Details" width="90%" />
          <img src="../images/styles.png" alt="Styles" width="100%" />
          <img src="../images/addToCart.png" alt="Add to cart" width="100%" />
      </Grid>
    </Grid>
    <Grid container>
      <Grid item md={8}>
      {/* refactor for dynamic rendering */}
        <h5 className="productSlogan">Blend in to your crowd</h5>
        <p className="productDescription">The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.</p>
      </Grid>
      <Grid item md={4}>
        <ul>
          <li>Fabric: Canvas</li>
          <li>Buttons: Brass</li>
        </ul>
      </Grid>
    </Grid>
    </>
  )
}