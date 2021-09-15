import React from "react";
import { ProductsProvider } from "./ProductsContext.jsx";
import ProductOverview from "./ProductOverview.jsx";
import RelatedProducts from "./RelatedProducts.jsx";
import CustomerOutfit from "./CustomerOutfit.jsx";
import QuestionsAndAnswers from "./QuestionsAndAnswers.jsx";
import RatingsAndReviews from "./RatingsAndReviews.jsx";
import Container from "@material-ui/core/Container";

export default function App(props) {
  return (
    <ProductsProvider>
      <Container maxWidth="lg">
        <div className="App">
          <ProductOverview />
          <RelatedProducts />
          <CustomerOutfit />
          <RatingsAndReviews />
          <QuestionsAndAnswers />
        </div>
      </Container>
    </ProductsProvider>
  );
}
