import React, { useState } from 'react';

//modal
import PropTypes from 'prop-types';
//Dialog
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
//Grid
import Grid from '@material-ui/core/Grid';
//Icons
import CheckIcon from '@material-ui/icons/Check';


//Hard Coded Features
let features = ['blue', 'satin', 'something extra cool!!', 'not as cool!']

export default function ModalPopup({ onClose, open }) {
  //modal information


  const handleClose = () => {
    onClose();
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
              <DialogTitle  >Selected Product</DialogTitle>
            </Grid>
          </Grid >
        </Grid>
        {features.map((feature, index) => (
          <Grid item xs={12} key={index}>
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
};