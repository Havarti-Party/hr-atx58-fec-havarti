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
    backgroundColor: '#B5FFEB',
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
    console.log('question:', e.target.name, e.target.value)
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    //needs to make a post request to the server/append it to state
    console.log(allValues);
    //need to format the inputs. Easiest way would be to append them to the database and have it auto increment question id, and then also update state for us in the form of a request body.
    console.log(questions);
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
          <form className='addQuestionForm' onClick={handleSubmit}>
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
              id='nicknameField'
              required
              label='What is your nickname'
              variant='outlined'
              className={classes.form}
              name='nickname'
              onChange={changeHandler}
            /><br/>
            <TextField
              id='emailField'
              required
              //error attribute to add here and trigger helper text
              label='What is your email'
              variant='outlined'
              className={classes.form}
              name='email'
              onChange={changeHandler}
              //helperText='must provide a valid email'
            /><br/>
            <label htmlFor="addYourPictures">
              <input accept="image/*" id="addYourPictures" type="file" />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <Button variant='contained' className={styles.button} >submit</Button>
          </form>
        </div>
      </Modal>
    </div>
  )
}
