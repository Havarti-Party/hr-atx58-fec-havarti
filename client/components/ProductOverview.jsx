
import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import MainImageCarousel from './MainImageCarousel';
import AverageStarRating from './AverageStarRating';
import StyleSelector from './StyleSelector';
import ProductDetails from './ProductDetails';
import ProductFeatures from './ProductFeatures';
import AddToCart from './AddToCart';
import { ProductsContext } from './ProductsContext';

export default function ProductOverview() {
  const { overviewProduct, stylesState, selectedStyleState } = useContext(ProductsContext)
  const [ overviewProductState ] = overviewProduct;
  const [ styles ] = stylesState;
  const [ selectedStyle, setSelectedStyle ] = selectedStyleState;


  const handleStyleClick = (clickedStyle) => {
    setSelectedStyle(styles[clickedStyle]);
  };

  return (
    <>
      <Grid container>
        <Grid item md={8}>
          <MainImageCarousel photos={selectedStyle.photos} />
        </Grid>
        <Grid item md={4}>
          <AverageStarRating />
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              const ratingsAndReviews = document.querySelector(
                "#ratings-and-reviews"
              );
              ratingsAndReviews.scrollIntoView({ behavior: "smooth" });
            }}
            style={{ fontSize: "12px" }}
          >
            Read All Reviews
          </a>
          <ProductDetails
            category={overviewProductState.category}
            name={overviewProductState.name}
            originalPrice={selectedStyle.original_price}
            salePrice={selectedStyle.sale_price}
          />
          <StyleSelector
            styles={styles}
            selectedStyle={selectedStyle}
            handleStyleClick={handleStyleClick}
          />
          <AddToCart
            currentProduct={overviewProductState}
            selectedStyle={selectedStyle}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={8}>
          <h5 className="productSlogan">{overviewProductState.slogan}</h5>
          <p className="productDescription">
            {overviewProductState.description}
          </p>
        </Grid>
        <Grid item md={4}>
          <ProductFeatures features={overviewProductState.features} />
        </Grid>
      </Grid>
    </>
  );
}
