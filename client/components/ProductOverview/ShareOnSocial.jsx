import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Grid from '@material-ui/core/Grid';
import Link from '@mui/material/Link';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

export default function ShareOnSocial ({name}) {

  const handleIconClick = (icon) => {
    alert(`Shared ${name} on ${icon}!`);
  };

  return(
    <Grid item>
      <Typography variant='h6'>Share on Social:
      <IconButton onClick={()=> handleIconClick('Facebook')} >
        <FacebookIcon />
      </IconButton>
      <IconButton onClick={()=> handleIconClick('Instagram')} >
        <InstagramIcon />
      </IconButton>
      <IconButton onClick={()=> handleIconClick('Pinterest')} >
        <PinterestIcon />
      </IconButton>
      </Typography>
    </Grid>
  )
}