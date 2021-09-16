import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

export default function StyleSelector( { styles, selectedStyle, handleStyleClick }) {


  return (
    <>
      <Grid container  spacing={3} alignItems="center" id="style-selector">
        {styles.map(style => (
          // if selectedStyle, use badge on avatar
          (style.style_id === selectedStyle.style_id ?
            <Grid item id="style">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                badgeContent={
                  <CheckCircleTwoToneIcon />
                }
              >
                <Avatar alt={style.name} src={style.photos[0].thumbnail_url} sx={{ width: 70, height: 70 }} key={style.style_id} />
              </Badge>
            </Grid> :
            <Grid item id="style">
              <IconButton onClick={handleStyleClick}>
                <Avatar alt={style.name} src={style.photos[0].thumbnail_url} sx={{ width: 70, height: 70 }} key={style.style_id} />
              </IconButton>
            </Grid>
          )
        ))}
      </Grid>
    </>
  )
}
