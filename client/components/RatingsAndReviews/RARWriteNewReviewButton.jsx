import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import RenderCharacteristics from './RARRenderCharacteristics.jsx';

// eslint-disable-next-line no-undef
const _ = require("underscore");


export default function FormDialog(props) {

  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    product_id: props.currentProduct.id,
    rating: 5,
    summary: 'testSummary',
    body: 'testBodytestBodytestBodytestBodytestBodyrestBoytestBodytestBody',
    recommend: true,
    name: 'testNickname',
    email: 'testEmail@gmail.com',
    photos: [],
    characteristics: {}
  })

  useEffect(() => {
    setFormData({
      ...formData,
      product_id: props.currentProduct.id});
  }, [props.currentProduct.id])

  useEffect(() => {
    var newCharacteristics = {};
    var newCharacteristicsArray = [];
    _.map(props.currentReviews.characteristics, ((characteristic) => {
      newCharacteristics[characteristic.id]= 5;
      newCharacteristicsArray.push(Number(characteristic.id));
    }))
    setFormData({
      ...formData,
      characteristics: newCharacteristics
    })
  }, [props.currentReviews])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setFormData(
      {
      ...formData,
      [event.target.name]: event.target.value
      }
      )
      // console.log(formData);
  }

  const handleCharacteristic = (event) => {
    setFormData(
      {
        ...formData,
        characteristics: {
          ...formData.characteristics,
          [event.target.name]: Number(event.target.value)
        }
      }
    )
  }

  const handleSubmit = () => {
    // console.log('Sending form data: ', formData);
    // axios.post(`/reviews`, formData, {
    //   params: {
    //     ID: props.currentProduct.id
    //   },
    // })
    // .then((postResponse) => {
    //   console.log('Received post response:');
    //   console.log(postResponse);
    // })
    // .catch((err) => {
    //   console.log('Error received from post request:');
    //   console.log(err);
    // })
  }

  return (
    <div>
      <Button className="RARWriteNewReviewButton" variant='contained' color='primary' onClick={handleClickOpen}>
        Write New Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Write Your Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            About the Product
          </DialogContentText>
          <FormControl required component='fieldset'>
            <FormLabel component='legend'>On a scale of 1-5, how would you rate this product?</FormLabel>
            <Rating name='reviewStars' value={formData.rating} onChange={(event, newValue) => {setFormData({...formData, rating: newValue})}} />
          </FormControl>
          <FormControl required component='fieldset'>
            <FormLabel required component='legend'>Would you recommend this product?</FormLabel>
            <RadioGroup onChange={handleChange} aria-label='reviewRecommend' defaultValue='Yes' name='recommend'>
              <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='No' control={<Radio />} label='No' />
            </RadioGroup>
          </FormControl>
          <RenderCharacteristics currentReviews={props.currentReviews} handleCharacteristic={handleCharacteristic}/>
          <TextField
            name='summary'
            onChange={handleChange}
            margin="dense"
            id="reviewSummary"
            label="Briefly summarize how you feel about this product."
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ min: 5, max: 60 }}
            placeholder="Example: Best purchase ever!"
            />
          <TextField
            name="body"
            onChange={handleChange}
            required
            multiline
            margin="dense"
            id="reviewSummary"
            label="Please tell us how you feel about this product."
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ min: 50, max: 1000}}
            placeholder="Why did you like this product or not?"
          />
          <label htmlFor="photos">
            <Typography>Upload up to 5 relevant images:</Typography>
          <input name="reviewPics" onChange={handleChange} accept="image/*" id="uploadReviewImage" multiple max='5' type="file" style={{display: 'none'}}/>
            <Button variant="contained" component="span">
              Upload a photo
            </Button>
          </label>
          <TextField
            name="name"
            onChange={handleChange}
            required
            margin="dense"
            id="reviewNickname"
            label="What is your nickname?"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ max: 60 }}
            placeholder="Example: jackson11!"
            />
            <Typography>For privacy reasons, do not use your full name or email address.</Typography>
          <TextField
            name="email"
            onChange={handleChange}
            required
            margin="dense"
            id="reviewEmail"
            label="What is your email address?"
            type="text"
            fullWidth
            variant="standard"
            inputProps={{ min: 5, max: 60 }}
            placeholder="Example: jackson11@gmail.com"
            />
          <Typography>For authentication reasons, you will not be emailed</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  currentProduct: PropTypes.array,
  currentReviews: PropTypes.object,
}