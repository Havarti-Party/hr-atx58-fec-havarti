import React, { useState, useContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { QuestionsContext } from './QuestionsAndAnswers.jsx';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles({
  modal: {
    position: 'absolute',
    width: 700,
    height: 500,
    border: '2px solid #000',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    'text-align': 'center',
    'background-color': 'white',
  },
  form: {
    padding: '10px',
    width: 500
  },
  button: {
    padding: '0 5px',
    margin: '10px',
  },

});


export default function AnswerModal({questionId, product_id}) {
  const classes = modalStyles()
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useContext(QuestionsContext);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [allValues, setAllValues] = useState({
    answer: '',
    nickname: '',
    email: '',
    images: [],
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const validateForm = (answerBody, nickname, email) => {
    var formValid = true;
    if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
      setAllValues({...allValues, [email]: ''})
      setEmailInvalid(true);
      formValid = false;
    } else {
      setEmailInvalid(false);
    }
    return formValid
  }

  const handleSubmit = (e) => {
    var answerBody = allValues.answer;
    var nickname = allValues.nickname;
    var email = allValues.email;
    var images = [];
    e.preventDefault();
    validateForm(answerBody, nickname, email);
    if (validateForm(answerBody, nickname, email)) {
      axios.post(`/qa/answers`, {
        answerBody: answerBody,
        nickname: nickname,
        email: email,
        images: images,
        question_id: questionId,
      })
      .then(() => {
        axios.get('/qa', {
          params: {
            id: product_id,
          }})
          .then(response => {
            var newQuestions = response.data.results
            setQuestions(newQuestions.sort((a, b) => {
              a.question_helpfulness - b.question_helpfulness
            }));
          })
          .then(() => {
            setAllValues({
              question: '',
              nickname: '',
              email: '',
            });
            setOpen(false);
          })
          .catch(error => {
            console.log('Error retrieving related questions for this product', error)
          })
      })
      .catch(error => {
        console.log('error creating a new Answer', error)
      })
    } else {
      console.log('something went wrong');
    }
  }

  return (
    <div id='answerModal'>
      <Button
        id='addAnswer'
        variant='contained'
        color='primary'
        onClick={handleOpen}
        className={classes.button}>Add an Answer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Submit your Answer'
        aria-describedby='a modal to post a new answer'
      >
        <div className={classes.modal}>
          <Typography variant='h4'>Submit your Answer</Typography>
          <Typography variant='body1'>About the [product name here]</Typography>
          <form className='addAnswerForm'>
            <TextField
              id='answerField'
              required
              multiline
              rows={6}
              label='Write your answer'
              variant='outlined'
              className={classes.form}
              name='answer'
              onChange={changeHandler}
            /><br/>
            <TextField
              id='nicknameFieldA'
              required
              label='What is your nickname'
              variant='outlined'
              className={classes.form}
              name='nickname'
              onChange={changeHandler}
            /><br/>
            <TextField
              id='emailFieldA'
              required
              error={emailInvalid}
              label='What is your email'
              variant='outlined'
              className={classes.form}
              name='email'
              onChange={changeHandler}
              helperText={emailInvalid ? 'Please provide a valid email' : ''}
            /><br/>
            <label htmlFor="addYourPictures">
              <input accept="image/*" id="addYourPictures" type="file" />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <Button variant='contained' className={classes.button} onClick={handleSubmit} >submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

AnswerModal.propTypes = {
  questionId: PropTypes.number,
  product_id: PropTypes.number,
}