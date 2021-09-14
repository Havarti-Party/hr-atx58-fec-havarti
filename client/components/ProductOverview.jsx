import React from 'react';
import Grid from '@material-ui/core/Grid';
import MainImageCarousel from './MainImageCarousel.jsx';
import AverageStarRating from './AverageStarRating.jsx';
import StyleSelector from './StyleSelector';
const axios = require('axios');

export default function ProductOverview(props) {
  // needed in state: styles, selectedStyle
  // const [styles, setStyles] = useState([]);
  // const [selectedStyle, setSelectedStyle] = useState(styles[0]);
  // const getStyles = () => {
  //   axios.get
  // }

  const styles = [
    {
      style_id: 227498,
      name: 'Forest Green & Black',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    },
    {
      style_id: 227499,
      name: 'Desert Brown & Tan',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    },
    {
      style_id: 227500,
      name: "Ocean Blue & Grey",
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1556304653-cba65c59b3c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    }
  ];
  const selectedStyle = {
      style_id: 227498,
      name: 'Forest Green & Black',
      original_price: '140.00',
      photos: [
        {thumbnail_url: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"}
      ]
    };

  const handleStyleClick = (e) => {
    console.log('clicked Style')
    // update state to selectedStyle
  };



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
        {/* Price */}

        <h4>${selectedStyle.original_price}</h4>

        <StyleSelector
          styles={styles}
          selectedStyle={selectedStyle}
          handleStyleClick={handleStyleClick}
        />
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