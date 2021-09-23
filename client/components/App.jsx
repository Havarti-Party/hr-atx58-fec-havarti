import React, { useContext } from "react";
import ProductOverview from "./ProductOverview/ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts/RelatedProducts.jsx";
import CustomerOutfit from "./RelatedProducts/CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews/RatingsAndReviews.jsx";
import Container from "@material-ui/core/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@material-ui/core/Grid";

import { ProductsContext } from "./ProductsContext";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  pallette: {
    primary: {
      main: '2FC3A8',
    },
    secondary: {
      main: '2FB1C3'
    },
  }
})

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
      <Container maxWidth="lg" className="App" spacing={2} >
        <ThemeProvider theme={theme} >
          <ProductOverview />
          <RelatedProducts />
          <CustomerOutfit />
          <RatingsAndReviews />
          <QuestionsAndAnswers />
        </ThemeProvider>
      </Container>
  );
}
