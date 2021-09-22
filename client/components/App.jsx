import React, {useContext, useEffect} from "react";
import ProductOverview from "./ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import CustomerOutfit from "./CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import Container from "@material-ui/core/Container";
// import { ProductsProvider } from "./ProductsContext.jsx";
import { ProductsContext } from './ProductsContext';

export default function App(props) {
  const { isLoading } = useContext(ProductsContext)
  const [ isLoadingState, setIsLoadingState ] = isLoading;

  // useEffect([isLoading])

  if(isLoadingState) {
    return (
        <h1>Loading...</h1>
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
