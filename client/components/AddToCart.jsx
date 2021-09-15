import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const AddToCart = ({ skus }) => {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);

  const onChange = () => {
    setMaxQuantity();
  }

  return (
    <>
    <Grid container>

    <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Select Size</InputLabel>
        <Select
          labelId="select-size"
          id="select-size"
          className={classes.selectEmpty}
          // value={age}
          // onChange={handleChange}
        >
          {Object.keys(skus).map(sku => (
            <MenuItem value={skus[sku].size}>{skus[sku].size}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    </>
  )
}

export default AddToCart;