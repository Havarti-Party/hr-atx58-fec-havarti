import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer.jsx';
import ExpandAnswers from './AnswerExpand.jsx';
import Grid from '@material-ui/core/Grid';
export const AnswerCountContext = createContext();

export default function AnswerList({answers, style, product_id, question }) {
  const [answerDisplayCount, setAnswerDisplayCount] = useState(2)

  var currentAnswers = answers.slice(0, answerDisplayCount);

  useEffect(() => {

  }, [])


  return (
    <Grid container>
      {currentAnswers.map(answer => {
        return <Answer key={answer.id} answerData={answer}/>
      })}
      <AnswerCountContext.Provider value={[answerDisplayCount, setAnswerDisplayCount]} >
        <ExpandAnswers style={style} answers={answers} currentAnswers={currentAnswers} product_id={product_id}/>
      </AnswerCountContext.Provider>
    </Grid>
  )
}

AnswerList.propTypes = {
  answers: PropTypes.array,
  style: PropTypes.object,
  product_id: PropTypes.number,
}