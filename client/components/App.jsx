import React, {useContext} from "react";
import ProductOverview from "./ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import CustomerOutfit from "./CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import Container from "@material-ui/core/Container";
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@material-ui/core/Grid';

import { ProductsContext } from './ProductsContext';

export default function App() {
  const { isLoading } = useContext(ProductsContext)
  const [ isLoadingState ] = isLoading;

  if(isLoadingState) {
    return (
        <Container maxWidth="lg" className="loading" >
          <Grid container justifyContent="center" alignItems="center">
            <CircularProgress />
          </Grid>
        </Container>
    )
  }
  return (
      <Container maxWidth="lg" className="App">
          <ProductOverview />
          <RelatedProducts />
          <CustomerOutfit />
          <RatingsAndReviews />
          <QuestionsAndAnswers />
      </Container>
  );
}
