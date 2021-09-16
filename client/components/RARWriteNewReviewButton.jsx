import React, { useState } from 'react';
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

export default function FormDialog(props) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <FormControl component='fieldset'>
            <FormLabel component='legend'>On a scale of 1-5, how would you rate this product?</FormLabel>
            <RadioGroup row aria-label='reviewStars' defaultValue='5' name='reviewStarsRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='1' />
              <FormControlLabel value='2' control={<Radio />} label='2' />
              <FormControlLabel value='3' control={<Radio />} label='3' />
              <FormControlLabel value='4' control={<Radio />} label='4' />
              <FormControlLabel value='5' control={<Radio />} label='5' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Would you recommend this product?</FormLabel>
            <RadioGroup aria-label='reviewRecommend' defaultValue='Yes' name='reviewRecommendRadioButtonGroup'>
              <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
              <FormControlLabel value='No' control={<Radio />} label='No' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the size of this product?</FormLabel>
            <RadioGroup aria-label='reviewSize' name='reviewSizeRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='A size too small' />
              <FormControlLabel value='2' control={<Radio />} label='½ a size too small' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='½ a size too big' />
              <FormControlLabel value='5' control={<Radio />} label='A size too big' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the width of this product?</FormLabel>
            <RadioGroup aria-label='reviewWidth' name='reviewWidthRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='Too narrow' />
              <FormControlLabel value='2' control={<Radio />} label='Slightly narrow' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Slightly wide' />
              <FormControlLabel value='5' control={<Radio />} label='Too wide' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the comfort of this product?</FormLabel>
            <RadioGroup aria-label='reviewComfort' name='reviewComfortRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='Uncomfortable' />
              <FormControlLabel value='2' control={<Radio />} label='Slightly uncomfortable' />
              <FormControlLabel value='3' control={<Radio />} label='OK' />
              <FormControlLabel value='4' control={<Radio />} label='Comfortable' />
              <FormControlLabel value='5' control={<Radio />} label='Perfect' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the quality of this product?</FormLabel>
            <RadioGroup aria-label='reviewQuality' name='reviewQualityRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='Poor' />
              <FormControlLabel value='2' control={<Radio />} label='Below Average' />
              <FormControlLabel value='3' control={<Radio />} label='What I expected' />
              <FormControlLabel value='4' control={<Radio />} label='Pretty great' />
              <FormControlLabel value='5' control={<Radio />} label='Perfect' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the length of this product?</FormLabel>
            <RadioGroup aria-label='reviewLength' name='reviewLengthRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='Runs short' />
              <FormControlLabel value='2' control={<Radio />} label='Runs slightly short' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Runs slightly long' />
              <FormControlLabel value='5' control={<Radio />} label='Runs long' />
            </RadioGroup>
          </FormControl>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>How would you rate the fit of this product?</FormLabel>
            <RadioGroup aria-label='reviewFit' name='reviewFitRadioButtonGroup'>
              <FormControlLabel value='1' control={<Radio />} label='Runs tight' />
              <FormControlLabel value='2' control={<Radio />} label='Runs slightly tight' />
              <FormControlLabel value='3' control={<Radio />} label='Perfect' />
              <FormControlLabel value='4' control={<Radio />} label='Runs slightly long' />
              <FormControlLabel value='5' control={<Radio />} label='Runs long' />
            </RadioGroup>
          </FormControl>
          <TextField
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}