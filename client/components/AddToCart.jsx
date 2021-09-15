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
  selectSizeForm: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectQtyForm: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const AddToCart = ({ skus }) => {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantities, setQuantities] = useState([]);

  const handleSizeChange = (e) => {
    console.log('changed to ', e.target.value)
    var maxQuantity = 0;

    Object.keys(skus).map(sku => {
      if (e.target.value === skus[sku].size) {
        if (skus[sku].quantity <= 15) {
          maxQuantity = skus[sku].quantity;
        } else {
          maxQuantity = 15;
        }
      }})
    var qty = 1;
    var quantityArr = [];
    while (qty <= maxQuantity) {
      quantityArr.push(qty);
      qty++;
    }
    console.log(quantityArr)
    setQuantities(quantityArr);
    setSelectedSize(e.target.value);
  }

  const handleQtyChange = (e) => {
    console.log('changed qty to ', e.target.value)
    setSelectedQuantity(e.target.value);
  }

  return (
    <>
    <Grid container>
      <FormControl variant="filled" className={classes.selectSizeForm}>
        <InputLabel id="size">Select Size</InputLabel>
        <Select
          labelId="select-size"
          id="select-size"
          value={selectedSize}
          //className={classes.selectEmpty}
          onChange={handleSizeChange}
        >
          {Object.keys(skus).map((sku, i) => (
            <MenuItem value={skus[sku].size} name='hello' >{skus[sku].size}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="filled" className={classes.selectQtyForm}>
        <InputLabel id="quantity">Quantity</InputLabel>
        <Select
          labelId="select-quantity"
          id="select-quantity"
          value={selectedQuantity}
          //className={classes.selectEmpty}
          onChange={handleQtyChange}
        >
          {quantities.map((selectQuantity, j) => (
            <MenuItem value={selectQuantity}>{selectQuantity}</MenuItem>
          ))
          }
        </Select>
      </FormControl>
    </Grid>
    </>
  )
}

export default AddToCart;