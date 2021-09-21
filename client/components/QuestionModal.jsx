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
  const [allValues, setAllValues] = useState({
    question: '',
    nickname: '',
    email: '',
 });

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

    if (email.indexOf('@') === -1) {
      setAllValues({...allValues, [email]: ''})
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
      // setAllValues({
      //   answer: '',
      //   nickname: '',
      //   email: '',
      // })
    }
    //VALIDATION
      //if nickname is a string?
      //body isn't too long?
      //email is a valid email


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
          <form className='addQuestionForm' >
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
            <Button variant='contained' className={styles.button} onClick={handleSubmit}>submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}
