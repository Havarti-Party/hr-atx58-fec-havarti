import React from 'react';
import ProductOverview from './ProductOverview.jsx'
import RelatedProducts from './RelatedProducts.jsx'
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx'
import RatingsAndReviews from './RatingsAndReviews.jsx'

export default function App(props) {
  return (
    <div>
      <ProductOverview />
      <RelatedProducts />
      <RatingsAndReviews />
      <QuestionsAndAnswers />
    </div>
  )
}