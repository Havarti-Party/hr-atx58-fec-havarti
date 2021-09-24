import React, { useState, createContext, useEffect }from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import AnswerList from './AnswerList.jsx';
import AnswerModal from './AnswerModal.jsx';

import Grid from "@mui/material/Grid";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const questionStyles = makeStyles({
  questionTile: {
    margin: '10px',
  },
  report: {
    color: 'red',
  }
})

export const AnswersContext = createContext();
//the list initally maps the top four questions
//inside each question. map top two answers
export default function Question({question, style, product_id}) {
  const classes = questionStyles();
  // eslint-disable-next-line no-unused-vars
  const [ answers, setAnswers ] = useState(Object.values(question.answers).sort((a, b) => {return b.helpfulness - a.helpfulness}))
  const [ questionHelpfulCount, setQuestionHelpfulCount ] = useState(question.question_helpfulness)
  const [ reported, setReported ] = useState(false)
  const [ markHelpful, setMarkHelpful ] = useState(false);

  useEffect(() => {

  }, [answers])

  // useEffect(() => {
  // }, [question])


  function incrementHelpfulCount(e) {
    //limit to one click
    e.preventDefault();
    setMarkHelpful(true);
    setQuestionHelpfulCount(prevCount => prevCount + 1);
    axios.post('/qa/questionHelpfulness', {
      questionId: question.question_id,
    })
    .then()
    .catch(error => {
      console.log('there was an error updating the question\'s helpful count', error);
    })
  }

  function handleReport(e) {
    e.preventDefault();
    //TURN THE QUESTION BACKGROUND RED?
    //disable the reported button
    setReported(true)
    axios.post('/qa/reportQuestion', {
      question_id: question.question_id,
    })
    .then(() => {
      window.alert('You\'ve successfully reported this Question. We will remove this as soon as possible')
    })
    .catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
      <Grid container>
        <Grid item md={8}>
          <Typography variant='h4'  color={reported ? 'red' : 'black'}>Q: {question.question_body}?</Typography >
        </Grid>
        <Grid item>
          <Typography variant='body1'>
            Helpful?
            <Button
              onClick={incrementHelpfulCount}
              variant='text'
              color='primary'
              disabled={markHelpful ? true : false}>
                yes ({questionHelpfulCount})
            </Button>
            ||
          </Typography>
          <AnswerModal questionId={question.question_id} product_id={product_id} setAnswers={setAnswers} answers={answers}/>
        </Grid>
        <Grid item>
          <Button
            onClick={handleReport}
            variant='text'
            className={classes.report}
            disabled={reported ? true : false}>
              report question
            </Button>
        </Grid>
        <Grid item id='answerList'>
          <AnswerList answers={answers} style={style} product_id={product_id} question={question}/>
        </Grid>
      </Grid>
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.object,
  style: PropTypes.object,
  product_id: PropTypes.number,
  questions: PropTypes.array,
}