import React from 'react';
import Typography from '@material-ui/core/Typography';


export default function ProductFeatures({features}) {

  return (
    <>
    <Typography variant='h5'>
      Product features
    </Typography>
    <ul>
      {features.map((feature, i) => (
        <li key={i}>
          <Typography variant='body1'>{feature.feature}: {feature.value}</Typography>
        </li>
      ))}
    </ul>
    </>

  )
}