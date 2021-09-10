import React from 'react';
import ProductOverview from './ProductOverview.jsx';
import RelatedProducts from './RelatedProducts.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';
import RatingsAndReviews from './RatingsAndReviews.jsx';
import Container from '@material-ui/core/Container';

export default function App(props) {
  return (
    <Container maxWidth="md">
      <div className="App">
        <ProductOverview />
        <RelatedProducts />
        <RatingsAndReviews />
        <QuestionsAndAnswers />
      </div>
    </Container>
  )
}