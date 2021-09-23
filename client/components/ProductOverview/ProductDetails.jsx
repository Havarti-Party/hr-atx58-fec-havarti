import React from 'react';
import Grid from '@material-ui/core/Grid';
import ShareOnSocial from './ShareOnSocial';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';


const ProductDetails = ({ category, name, originalPrice, salePrice }) => {

  return (
    <>
      <Grid item md={12} id="category">
        <Typography variant='body1'>{category.toUpperCase()}</Typography>
      </Grid>
      <Grid item md={12} id="product-name">
        <Typography variant='h4'>{name}</Typography>
      </Grid>
      <Grid item md={12} id="price">
        {salePrice === null ?
          <Typography variant='body1'>${originalPrice}</Typography>
          :
          <Typography variant='body1'>${salePrice} <strike>${originalPrice}</strike></Typography>
        }
      </Grid>
      <ShareOnSocial name={name} />
    </>
  )
}

ProductDetails.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
}

export default ProductDetails;