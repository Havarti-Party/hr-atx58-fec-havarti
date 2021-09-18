import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Grid from '@material-ui/core/Grid';
import Link from '@mui/material/Link';

export default function ShareOnSocial (props) {

  const handleIconClick = (icon) => {
    alert(`Shared on ${icon}!`);
  };

  return(
    <Grid item>
      <h4>Share on Social:</h4>
      <Link href="#" onClick={()=> handleIconClick('Facebook')} ><FacebookIcon /></Link>
      <Link href="#" onClick={()=> handleIconClick('Instagram')} ><InstagramIcon /></Link>
      <Link href="#" onClick={()=> handleIconClick('Pinterest')} ><PinterestIcon /></Link>
    </Grid>
  )
}