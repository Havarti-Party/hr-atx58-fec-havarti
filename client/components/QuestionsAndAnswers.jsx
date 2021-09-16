import React, {useState} from 'react';
import Question from './Question.jsx';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


export default function QuestionsAndAnswers(props) {

  const modalStyles = makeStyles({
    paper: {
      position: 'absolute',
      width: 800,
      backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: '2px solid #000',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
  });


  function QuestionModal(props) {
    const classes = modalStyles()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <h3>Ask Your Question </h3>
        {/* <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField>
        <TextField></TextField> */}
      </div>
    )
  }

  return (
    <div id='questionList'>
      <h1>Customer Questions And Answers</h1>
      <TextField
        id='questionSearch'
        label='search for a specific question here'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment>
              <SearchIcon />
            </InputAdornment>
          )
        }}/>
      {questions.map(question => {
        return <Question question={question}/>
      })}
      <Button id='expandAnswers' variant='contained' onClick={expandAnswers}>expand answers</Button>
      <Button id='addQuestion'variant='contained' onClick={addQuestionModal}>add a question</Button>
    </div>
  )
}


const sampleQuestions = [
    {
    "question_id": 37,
    "question_body": "Why is this product cheaper here than other sites?",
    "question_date": "2018-10-18T00:00:00.000Z",
    "asker_name": "williamsmith",
    "question_helpfulness": 4,
    "reported": false,
    "answers": {
      68: {
        "id": 68,
        "body": "We are selling it here without any markup from the middleman!",
        "date": "2018-08-18T00:00:00.000Z",
        "answerer_name": "Seller",
        "helpfulness": 4,
        "photos": []
        // ...
      }
    }
  },
  {
    "question_id": 38,
    "question_body": "How long does it last?",
    "question_date": "2019-06-28T00:00:00.000Z",
    "asker_name": "funnygirl",
    "question_helpfulness": 2,
    "reported": false,
    "answers": {
      70: {
        "id": 70,
        "body": "Some of the seams started splitting the first time I wore it!",
        "date": "2019-11-28T00:00:00.000Z",
        "answerer_name": "sillyguy",
        "helpfulness": 6,
        "photos": [],
      },
      78: {
        "id": 78,
        "body": "9 lives",
        "date": "2019-11-12T00:00:00.000Z",
        "answerer_name": "iluvdogz",
        "helpfulness": 31,
        "photos": [],
      }
    }
  },
  //...
]

// var product = {
//   "product_id": "5", //product id
//   "results": [{ //results include all questions on this product
