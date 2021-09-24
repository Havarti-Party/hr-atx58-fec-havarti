import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import MainImageCarousel from "./MainImageCarousel";
import AverageStarRating from "./AverageStarRating";
import StyleSelector from "./StyleSelector";
import ProductDetails from "./ProductDetails";
import ProductFeatures from "./ProductFeatures";
import AddToCart from "./AddToCart";
import { ProductsContext } from "../ProductsContext";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@mui/material/Divider';


export default function ProductOverview() {
  const { overviewProduct, stylesState, selectedStyleState, clickedComponent, clickedElement, clickTracker } =
    useContext(ProductsContext);
  const [overviewProductState] = overviewProduct;
  const [styles] = stylesState;
  const [selectedStyle, setSelectedStyle] = selectedStyleState;
  const [clickTrackerFunc] = clickTracker;
  const [clickedComponentState, setClickedComponentState] = clickedComponent;
  const [clickedElementState, setClickedElementState] = clickedElement;
  const handleStyleClick = (clickedStyle) => {
    setSelectedStyle(styles[clickedStyle]);
  };

  return (
      <Grid container spacing={4} >
        <Grid item xs={8} onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Image Carousel", event.target)
        } >
          <MainImageCarousel
          photos={selectedStyle.photos}
          />
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={1}>
            <Grid item onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Star Rating", event.target)
        }>
              <AverageStarRating />
              <Button
                color='primary'
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
              </Button>
            </Grid>
            <Grid item onClick={() =>
              clickTrackerFunc.clickTrackerFunc("Product Details", event.target)
            }>
              <ProductDetails
                category={overviewProductState.category}
                name={overviewProductState.name}
                originalPrice={selectedStyle.original_price}
                salePrice={selectedStyle.sale_price}
              />
            </Grid>
            <Grid item  onClick={() =>
              clickTrackerFunc.clickTrackerFunc("Style Selector", event.target)
            }>
              <StyleSelector
                styles={styles}
                selectedStyle={selectedStyle}
                handleStyleClick={handleStyleClick}
              />
            </Grid>
            <Grid item onClick={() =>
              clickTrackerFunc.clickTrackerFunc("Add To Cart", event.target)
            }>
              <AddToCart />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Product Description", event.target)
        }>
          <Typography variant='h5' className="productSlogan">{overviewProductState.slogan}</Typography>
          <Typography className="productDescription">
            {overviewProductState.description}
          </Typography>
        </Grid>
        <Grid item xs={1} style={{ display: "flex", justifyContent: "center" }}>
          <Divider orientation="vertical" variant="middle" />
        </Grid>
        <Grid item xs={4} onClick={() =>
        clickTrackerFunc.clickTrackerFunc("Product Features", event.target)
        }>
          <ProductFeatures features={overviewProductState.features} />
        </Grid>
      </Grid>
  );
}
