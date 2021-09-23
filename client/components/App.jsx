import React, { useContext } from "react";
import Header from "./HeaderFooter/Header.jsx";
import ProductOverview from "./ProductOverview/ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts.jsx";
import CustomerOutfit from "./RelatedProducts/CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";
import Footer from "./HeaderFooter/Footer.jsx";
import Container from "@material-ui/core/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@material-ui/core/Grid";

import { ProductsContext } from "./ProductsContext";

export default function App() {
  const { isLoading } = useContext(ProductsContext);
  const [isLoadingState] = isLoading;

  if (isLoadingState) {
    return (
        <Container maxWidth="lg" className="loading" >
          <Grid container justifyContent="center" alignItems="center" >
            <CircularProgress />
          </Grid>
        </Container>
    )
  }
  return (
      <Container maxWidth="lg" className="App" >
        <Header />
        <ProductOverview />
        <RelatedProducts />
        <CustomerOutfit />
        <RatingsAndReviews />
        <QuestionsAndAnswers />
        <Footer />
      </Container>
  );
}
