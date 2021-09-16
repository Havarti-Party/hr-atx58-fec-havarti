import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

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


export default function QuestionModal({styles}) {
  const classes = modalStyles()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //needs to make a post request to the server/append it to state
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
          <TextField
            id='questionField'
            required
            multiline
            rows={6}
            label='Write your question'
            variant='outlined'
            className={classes.form}
          /><br/>
          <TextField
            id='nicknameField'
            required
            label='What is your nickname'
            variant='outlined'
            className={classes.form}
          /><br/>
          <TextField
            id='emailField'
            required
            //error attribute to add here and trigger helper text
            label='What is your email'
            variant='outlined'
            className={classes.form}
            //helperText='must provide a valid email'
          /><br/>
          <Button variant='contained' className={styles.button} onClick={handleSubmit}>submit</Button>
        </ div>
      </ Modal>
    </div>
  )
}
