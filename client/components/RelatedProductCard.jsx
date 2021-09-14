import React, { useState } from 'react';
import ModalPopup from './CompareModal.jsx'

//modal
import PropTypes from 'prop-types';

import Modal from '@material-ui/core/Modal';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import { positions } from '@material-ui/system';

//Grid
import Grid from '@material-ui/core/Grid';
//Icons
import CheckIcon from '@material-ui/icons/Check';
import StarBorderIcon from '@material-ui/icons/StarBorder';


//Hard Coded Features
let features = ['blue', 'satin', 'something extra cool!!', 'not as cool!']






export default function RelatedProductCard({ RelatedObj }) {

  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 250,
    },
  });

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);

  };
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <StarBorderIcon />
        <CardMedia
          className={classes.media}
          image={RelatedObj.url}
          title={RelatedObj.name}
        />


        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {RelatedObj.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {RelatedObj.description}
          </Typography>
          <StarRatings
            rating={2}
            starDimension={'15px'}
            starSpacing={'1px'}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add To Outfit
        </Button>
        <Button size="small" color="primary" onClick={handleClickOpen}  >
          Compare to Overview
        </Button>
        <ModalPopup open={open} onClose={handleClose} />
      </CardActions>
    </Card>
  );
}

