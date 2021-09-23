import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Grid from '@material-ui/core/Grid';
import Link from '@mui/material/Link';
import IconButton from '@material-ui/core/IconButton';

export default function ShareOnSocial ({name}) {

  const handleIconClick = (icon) => {
    alert(`Shared ${name} on ${icon}!`);
  };

  return(
    <Grid item>
      <h4>Share on Social:</h4>
      <IconButton onClick={()=> handleIconClick('Facebook')} >
        <FacebookIcon />
      </IconButton>
      <IconButton onClick={()=> handleIconClick('Instagram')} >
        <InstagramIcon />
      </IconButton>
      <IconButton onClick={()=> handleIconClick('Pinterest')} >
        <PinterestIcon />
      </IconButton>
    </Grid>
  )
}