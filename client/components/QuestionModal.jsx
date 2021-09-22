import React, { useState, useContext} from 'react';
import axios from 'axios';

import { QuestionsContext } from './QuestionsAndAnswers.jsx';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


import { makeStyles } from '@material-ui/core/styles';

const modalStyles = makeStyles({
  modal: {
    position: 'absolute',
    width: 800,
    height: 800,
    'background-color': 'white',
    border: '2px solid #000',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    'text-align': 'center'
  },
  form: {
    padding: '10px',
    width: 500
  }

});


export default function QuestionModal({styles, product_id}) {
  const classes = modalStyles()
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useContext(QuestionsContext);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [nicknameInvalid, setNicknameInvalid] = useState(false);
  const [questionInvalid, setQuestionInvalid] = useState(false);
  const [allValues, setAllValues] = useState({
    question: '',
    nickname: '',
    email: '',
  });


  const validateForm = (questionBody, nickname, email) => {
    var formValid = true;
    if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
      setAllValues({...allValues, [email]: ''})
      setEmailInvalid(true);
      formValid = false;
    } else {
      setEmailInvalid(false);
    }
    return formValid;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    var questionBody = allValues.question
    var nickname = allValues.nickname
    var email = allValues.email

    e.preventDefault();

    validateForm(questionBody, nickname, email);

    if (validateForm(questionBody, nickname, email)) {
      // var currentDate = new Date().toLocaleDateString();
      axios.post('/qa/questions', {
        question_body: questionBody,
        asker_name: nickname,
        email: email,
        product_id: product_id,
      })
      .then(response => {
        setAllValues({
          question: '',
          nickname: '',
          email: '',
        });
        setOpen(false);
      })
      .then(next => {
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
          .catch(error => {
            console.log('Error retrieving related questions for this product', error)
          })
      })
      .catch(error => {
        console.log('error creating a new question')
        window.alert('error creating a new question, please try again')
      })
    } else {
      console.log('something went wrong')
    }
    //needs to make a post request to the server/append it to state
    console.log(allValues);
  }
  return (
    <div id='questionModal' className={styles.modal}>
      <Button id='addQuestion' variant='contained' onClick={handleOpen} className={styles.button}>add a question</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='Ask Your Question'
        aria-describedby='a modal to post a new question'
      >
        <div className={classes.modal}>
          <h3>Ask Your Question </h3>
          <h4>About the [product name here]</h4>
          <form className='addQuestionForm' onSubmit={handleSubmit}>
            <TextField
              id='questionField'
              required
              multiline
              rows={6}
              label='Write your question'
              variant='outlined'
              className={classes.form}
              name='question'
              onChange={changeHandler}
            /><br/>
            <TextField
              id='nicknameFieldQ'
              required
              label='What is your nickname'
              variant='outlined'
              className={classes.form}
              name='nickname'
              onChange={changeHandler}
            /><br/>
            <TextField
              id='emailFieldQ'
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
            <Button variant='contained' className={styles.button} type='submit'>submit</Button>
            {/* <Button variant='contained' className={styles.button} type='submit'>submit</Button> ============= I can use this if I do a form submit, but it re-renders the whole page, but
            also closes out the modal for you... AND it utilizes the 'required' attributes I have on the textFields*/}
          </form>
        </div>
      </Modal>
    </div>
  )
}
