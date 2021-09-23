import React from 'react';
import Grid from "@material-ui/core/Grid";

export default function ProductFeatures({features}) {

  return (
    <>
      <Grid item xs={12}>
        <h3>Product features</h3>
      </Grid>
      <Grid item xs={12}>
        <ul>
          {features.map((feature, i) => (
            <li key={i}>{feature.feature}: {feature.value}</li>
          ))}
        </ul>
      </Grid>
    </>
  )
}