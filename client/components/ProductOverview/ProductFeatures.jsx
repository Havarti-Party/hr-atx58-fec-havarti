import React from 'react';


export default function ProductFeatures({features}) {

  return (
    <>
    Product features
    <ul>
      {features.map((feature, i) => (
        <li key={i}>{feature.feature}: {feature.value}</li>
      ))}
    </ul>
    </>

  )
}