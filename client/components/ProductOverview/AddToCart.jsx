import React, { useState, useEffect, useContext } from 'react';
import Button from '@mui/material/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { ProductsContext } from "../ProductsContext";

const useStyles = makeStyles((theme) => ({
  selectSizeForm: {
    margin: theme.spacing(0),
    minWidth: 200,
  },
  selectQtyForm: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
}));

const AddToCart = () => {
  const { overviewProduct, selectedStyleState } =
    useContext(ProductsContext);
  const [overviewProductState] = overviewProduct;
  const [selectedStyle] = selectedStyleState;
  const classes = useStyles();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [outOfStock, setOutOfStock] = useState(false);
  const [selectQuantityOpen, setSelectQuantityOpen] = useState(false);
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
    } else {
      setOutOfStock(false);
    }
  };

  useEffect(() => {
    setSelectedSize('');
    setSelectedQuantity('')
  }, [overviewProductState, selectedStyle]);

  useEffect(() => checkStock());

  const handleSizeSelectorClose = () => {
    setSelectQuantityOpen(false);
  };

  const handleSizeSelectorOpen = () => {
    setSelectQuantityOpen(true);
  };

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
  };

  const handleQtyChange = (e) => {
    setSelectedQuantity(e.target.value);
  };

  const handleAddToCartWhenSizeSelected = () => {
    setCart({
      product: overviewProductState.name,
      style: selectedStyle.name,
      size: selectedSize,
      quantity: selectedQuantity
    });
    // Add axios push request here to add product to cart
    // axios.push('/addToCart', {
    //   sku: selectedStyle.sku
    // })
    alert('Successfully added to your cart!')
  }

  const handleAddToCartClick = () => {
    selectedSize === '' ?
    handleSizeSelectorOpen()
    :
    handleAddToCartWhenSizeSelected()
  }

  return (
    <Grid container justifyContent="flex-start" spacing={3} >
      { !outOfStock ?
        <Grid item xs={7}>
          <FormControl variant="outlined" className={classes.selectSizeForm} fullWidth={true}>
            <InputLabel id="size">Select Size</InputLabel>
            <Select
              labelId="select-size"
              id="select-size"
              value={selectedSize}
              onChange={handleSizeChange}
              open={selectQuantityOpen}
              onClose={handleSizeSelectorClose}
              onOpen={handleSizeSelectorOpen}
            >
              {Object.keys(skus).map((sku, i) => (
                skus[sku].quantity > 0 ?
                  <MenuItem key={i} value={skus[sku].size} >{skus[sku].size}</MenuItem> :
                  <></>
              ))}
            </Select>
          </FormControl>
        </Grid>
        :
        <Grid item xs={7}>
          <FormControl variant="outlined" className={classes.selectSizeForm} disabled fullWidth={true}>
            <InputLabel id="size">OUT OF STOCK</InputLabel>
            <Select
              labelId="select-size"
              id="select-size"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              {Object.keys(skus).map((sku, i) => (
                skus[sku].quantity > 0 ?
                  <MenuItem key={i} value={skus[sku].size} >{skus[sku].size}</MenuItem> :
                  <></>
              ))}
            </Select>
          </FormControl>
        </Grid>
      }
      {selectedSize === '' ?
        <Grid item xs={5}>
          <FormControl variant="outlined" className={classes.selectQtyForm} disabled fullWidth={true} >
          <InputLabel id="quantity">Quantity</InputLabel>
          <Select
            labelId="select-quantity"
            id="select-quantity"
            value={selectedQuantity}
            onChange={handleQtyChange}
          >
            {quantities.map((selectQuantity, j) => (
              <MenuItem key={j} value={selectQuantity} >{selectQuantity}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>
        :
        <Grid item xs={5}>
          <FormControl variant="outlined" className={classes.selectQtyForm} fullWidth={true} >
            <InputLabel id="quantity">Quantity</InputLabel>
            <Select
              labelId="select-quantity"
              id="select-quantity"
              value={selectedQuantity}
              onChange={handleQtyChange}
            >
              {quantities.map((selectQuantity, j) => (
                <MenuItem key={j} value={selectQuantity} >{selectQuantity}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      }

      <Grid item xs={12}>
        {outOfStock ?
        <></>
        :
        <Button size="large" color="success" variant="contained" endIcon={<AddIcon/>} onClick={handleAddToCartClick} fullWidth={true}>Add To Cart</Button>
        }
      </Grid>
    </Grid>
  )
}

AddToCart.propTypes = {
  overviewProductState: PropTypes.object,
  selectedStyle: PropTypes.object
}

export default AddToCart;