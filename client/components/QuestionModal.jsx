import React, {useState} from 'react';
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


export default function QuestionModal({styles, questions}) {
  const classes = modalStyles()
  const [open, setOpen] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [nicknameInvalid, setNicknameInvalid] = useState(false);
  const [questionInvalid, setQuestionInvalid] = useState(false);
  const [allValues, setAllValues] = useState({
    question: '',
    nickname: '',
    email: '',
 });

  const validateForm = (questionBody, nickname, email) => {
    if (email.indexOf('@') === -1 || email.indexOf('.com') === -1) {
      setAllValues({...allValues, [email]: ''})
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }

    if (questionBody === '') {
      setAllValues({...allValues, [question]: ''})
      setQuestionInvalid(true);
    } else {
      setQuestionInvalid(false);
    }

    if (nickname === '') {
      //left this setValue incase I add more parameters for the nickname
      setAllValues({...allValues, [nickname]: ''})
      setNicknameInvalid(true);
    } else {
      setNicknameInvalid(false);
    }
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeHandler = (e) => {
    // console.log('question:', e.target.name, e.target.value)
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    var questionBody = allValues.question
    var nickname = allValues.nickname
    var email = allValues.email

    e.prevent.default();

    validateForm(questionBody, nickname, email);

    //needs to make a post request to the server/append it to state
      //also validate in the server side
        //if server comes up greenlights
        //close modal (setopen = false)
        //maybe an alert
        //reset all the values
    console.log(allValues);
    //need to format the inputs. Easiest way would be to append them to the database and have it auto increment question id, and then also update state for us in the form of a request body.

    //ALSO NEEDS TO CLOSE THE MODAL
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
            <Button variant='contained' className={styles.button}>submit</Button>
            {/* <Button variant='contained' className={styles.button} type='submit'>submit</Button> ============= I can use this if I do a form submit, but it re-renders the whole page, but
            also closes out the modal for you... AND it utilizes the 'required' attributes I have on the textFields*/}
          </form>
        </div>
      </Modal>
    </div>
  )
}
