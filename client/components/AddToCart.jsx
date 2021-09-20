import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  selectSizeForm: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectQtyForm: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
  },
}));

const AddToCart = ({ currentProduct, selectedStyle }) => {
  const classes = useStyles();
  const [size, setSize] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [cart, setCart] = useState({
    product: '',
    style: '',
    size: '',
    quantity: 0
  })
  const skus = selectedStyle.skus;

  const checkStock = () => {
    var totalStock = 0;
    Object.keys(skus).map(sku => {
      totalStock += skus[sku].quantity;
    })
    if (totalStock === 0) {
      setOutOfStock(true);
    }
  }

  useEffect(() => checkStock());

  const handleSizeChange = (e) => {
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
    setQuantities(quantityArr);
    setSelectedSize(e.target.value);
    setSelectedQuantity(1);
  }

  const handleQtyChange = (e) => {
    setSelectedQuantity(e.target.value);
  }

  const handleAddToCartClick = (e) => {
    // if size has not been selected, prompt to select size and open drop down
    selectedSize === '' ?
    console.log('open size drop down')
    :
    console.log('add to cart', selectedStyle)

    setCart({
      product: currentProduct.name,
      style: selectedStyle.name,
      size: selectedSize,
      quantity: selectedQuantity
    })
  }

  return (
    <>
    <Grid container>
      { !outOfStock ?
        <FormControl variant="filled" className={classes.selectSizeForm} >
          <InputLabel id="size">Select Size</InputLabel>
          <Select
            labelId="select-size"
            id="select-size"
            value={selectedSize}
            //className={classes.selectEmpty}
            onChange={handleSizeChange}
          >
            {Object.keys(skus).map((sku, i) => (
              skus[sku].quantity > 0 ?
                <MenuItem key={i} value={skus[sku].size} >{skus[sku].size}</MenuItem> :
                <></>
            ))}
          </Select>
        </FormControl>
        :
        <FormControl variant="filled" className={classes.selectSizeForm} disabled >
          <InputLabel id="size">OUT OF STOCK</InputLabel>
          <Select
            labelId="select-size"
            id="select-size"
            value={selectedSize}
            //className={classes.selectEmpty}
            onChange={handleSizeChange}
          >
            {Object.keys(skus).map((sku, i) => (
              skus[sku].quantity > 0 ?
                <MenuItem key={i} value={skus[sku].size} >{skus[sku].size}</MenuItem> :
                <></>
            ))}
          </Select>
        </FormControl>
      }

      {selectedSize === '' ? <FormControl variant="filled" className={classes.selectQtyForm} disabled >
        <InputLabel id="quantity">Quantity</InputLabel>
        <Select
          labelId="select-quantity"
          id="select-quantity"
          value={selectedQuantity}
          //className={classes.selectEmpty}
          onChange={handleQtyChange}
        >
          {quantities.map((selectQuantity, j) => (
            <MenuItem key={j} value={selectQuantity} >{selectQuantity}</MenuItem>
          ))}
        </Select>
      </FormControl>
      :
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
            <MenuItem key={j} value={selectQuantity} >{selectQuantity}</MenuItem>
          ))}
        </Select>
      </FormControl>

    }
    </Grid>
    <Grid container>
      {outOfStock ?
      <></> :
      <Button variant="contained" endIcon={<AddIcon/>} onClick={handleAddToCartClick}>Add To Cart</Button>
      }

    </Grid>
    </>
  )
}

export default AddToCart;