import React, { useState } from 'react';

//modal
import PropTypes from 'prop-types';
import { blue } from '@material-ui/core/colors';
//list
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarRatings from 'react-star-ratings';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { positions } from '@material-ui/system';

//Grid
import Grid from '@material-ui/core/Grid';
//Icons
import CheckIcon from '@material-ui/icons/Check';


//Hard Coded Features
let features = ['blue', 'satin', 'something extra cool!!', 'not as cool!']


function ModalPopup({ onClose, selectedValue, open }) {
  //modal information


  const handleClose = () => {
    onClose(selectedValue);
  };



  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Compare</DialogTitle>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="stretch"
      >

        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={4}>
              <DialogTitle >Overview Product</DialogTitle>
            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={4}>
              <DialogTitle  >Clicked-On Product</DialogTitle>
            </Grid>
          </Grid >
        </Grid>
        {features.map((feature) => (
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={2}>
                <CheckIcon />
              </Grid>
              <Grid item xs={6}>
                <DialogTitle >{feature}</DialogTitle>
              </Grid>
              <Grid item xs={32}>
                <CheckIcon />
              </Grid>
            </Grid >
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
}

ModalPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

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
  const [selectedValue, setSelectedValue] = React.useState(features[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
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
        <ModalPopup selectedValue={selectedValue} open={open} onClose={handleClose} />
      </CardActions>
    </Card>
  );
}

