import React from 'react';
import Typography from '@material-ui/core/Typography';

import Grid from "@material-ui/core/Grid";

export default function ProductFeatures({features}) {

  return (
    <>
      <Grid item xs={12}>
        <Typography variant='h5'>
          Product features
        </Typography>
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