import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const theme = {
  spacing: 8,
}
export default function StyleSelector( { styles, selectedStyle, handleStyleClick }) {
  return (
    <>
      <Grid container>
        <Typography variant='body1'>STYLE {">"} {selectedStyle.name.toUpperCase()}</Typography >
      </Grid>
      <Grid container alignItems="center" id="style-selector" spacing={2}>
        {styles.map((style, i) => (
          style.style_id === selectedStyle.style_id ?
            <Grid item xs={3} style={{ display: "flex", justifyContent: "center" }} key={style.style_id}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                badgeContent={
                  <CheckCircleTwoToneIcon />
                }
              >
                <Avatar alt={style.name} src={style.photos[0].thumbnail_url} sx={{ width: 70, height: 70 }} />
              </Badge>
            </Grid>
            :
            <Grid item xs={3} style={{ display: "flex", justifyContent: "center" }} key={style.style_id} >
              <IconButton onClick={() => handleStyleClick(i)} >
                <Avatar alt={style.name} src={style.photos[0].thumbnail_url} sx={{ width: 70, height: 70 }} />
              </IconButton>
            </Grid>

        ))}
      </Grid>
    </>
  )
}
