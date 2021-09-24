/* eslint-disable no-unused-vars */
import React from "react";

//modal
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";
//Dialog
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { AppBar, Toolbar, IconButton } from "@mui/material";
//Grid
import Grid from "@material-ui/core/Grid";
//Icons
import CheckIcon from "@material-ui/icons/Check";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export default function ModalPopup({
  onClose,
  open,
  compareFeatures,
  relatedProductFeatures,
  overviewProductFeatures,
}) {
  const handleClose = () => {
    onClose();
  };

  let uniqueFeatures = [...new Set(compareFeatures)];

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CompareArrowsIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Compare Items
          </Typography>
        </Toolbar>
      </AppBar>
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
              <DialogTitle>Overview Product</DialogTitle>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
              <DialogTitle>Selected Product</DialogTitle>
            </Grid>
          </Grid>
        </Grid>
        {uniqueFeatures.map((feature, index) => (
          <Grid item xs={12} key={index}>
            <Grid spacing={2} container direction="row" alignItems="center">
              <Grid item xs={4}>
                {overviewProductFeatures[feature]
                  ? overviewProductFeatures[feature]
                  : ""}
              </Grid>
              <Grid item xs={4}>
                <DialogTitle>{feature}</DialogTitle>
              </Grid>
              <Grid item xs={4}>
                {relatedProductFeatures[feature]
                  ? relatedProductFeatures[feature]
                  : ""}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Dialog>
  );
}
ModalPopup.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  compareFeatures: PropTypes.array,
  relatedProductFeatures: PropTypes.object,
  overviewProductFeatures: PropTypes.object,
};
