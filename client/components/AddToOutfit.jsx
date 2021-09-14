import React, { useState, useEffect, useRef } from 'react';



//Card Features
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';


//Icons
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

export default function AddToOutfitCard() {

  return (
    <Card >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Like the above outift?
          </Typography>
      <CardActionArea>
          <DoneOutlineIcon style={{fontSize: 250}} />
      </CardActionArea>
          <Typography variant="body2" color="textSecondary" component="p">
            Click the Icon add to your wardrobe
          </Typography>
        </CardContent>
    </Card>
  )
}