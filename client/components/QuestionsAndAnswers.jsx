import React, { useState } from 'react';
import Question from './Question.jsx';
import Button from '@material-ui/core/Button';


export default function QuestionsAndAnswers(props) {
  const [questions, setQuestions] = useState(() => sampleQuestions)

  return (
    <div id='questionList'>
      <h1>Customer Questions And Answers</h1>
      <input type='text' placeholder='search for a specific question here'/>
      {questions.map(question => {
        return <Question question={question}/>
      })}
      <Button variant='contained'>expand answers</Button>
      <Button variant='contained'>add a question</Button>
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