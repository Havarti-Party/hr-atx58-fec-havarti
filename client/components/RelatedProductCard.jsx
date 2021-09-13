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

//Card Styles
const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 250,
  },
});

//Modal Properties
const modalStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
let emails = ['line 1, line 2', 'line 3']

function ModalPopup(props) {
  //modal information
  const classes = modalStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

ModalPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function RelatedProductCard({ RelatedObj }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

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

