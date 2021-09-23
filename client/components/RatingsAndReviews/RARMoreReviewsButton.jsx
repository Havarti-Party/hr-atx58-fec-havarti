import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function MoreReviewsButton(props) {
  if (props.count === 0 || props.reviewDisplayCount >= props.count) {
    return null;
  } else {
    return (
      <Button style={{width: '100%'}} variant='contained' color='primary' padding="100px" onClick={()=>{props.updateDisplayCount(props.reviewDisplayCount+2)}}>More Reviews, Please</Button>
    )
  }
}

MoreReviewsButton.propTypes = {
  count: PropTypes.number,
  reviewDisplayCount: PropTypes.number,
  updateDisplayCount: PropTypes.func,
}