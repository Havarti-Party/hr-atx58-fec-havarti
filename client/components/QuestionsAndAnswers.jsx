import React, { useState, useEffect, useContext, useRef } from 'react';

import axios from 'axios';

import { ProductsContext } from './ProductsContext.jsx';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';

import IconButton from '@mui/material/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const questionListStyles = makeStyles({
  list: {
    backgroundColor: '#B5FFEB',
    'border-style': 'solid',
  },
  modal: {
    backgroundColor: '#B5FFEB',
  },
  button: {
    padding: '0 5px',
    margin: '10px',
    backgroundColor: '#95F5DB',
  },
  searchbar: {
    margin: '10px',
    width: '50%',
  }
})



export default function QuestionsAndAnswers(props) {
  const classes = questionListStyles()
  const [overviewProduct, setOverviewProduct] = useContext(ProductsContext)
  const [questionDisplayCount, setQuestionDisplayCount] = useState(4);
  const [questions, setQuestions] = useState([])

  const [searchValue, setSearchValue] = useState('');
  var currentQuestions = questions.slice(0, questionDisplayCount)

  const isMounted = useRef(false);



  useEffect(() => {
    if (isMounted.current) {
      axios.get('/qa', {
        params: {
          id: overviewProduct.id - 1,
        }})
        .then(response => {
          var newQuestions = response.data.results
          console.log(newQuestions)
          setQuestions(newQuestions);
        })
        .catch(error => {
          console.log('Error retrieving related questions for this product', error)
        })
    } else {
      isMounted.current = true;
    }
  }, [overviewProduct])


  function expandQuestions() {
    console.log('expanded')
  }
  //four questions to start, expand should hold all questions though
  function handleSearch(e) {
    console.log(searchValue);
    for (var i = 0; i < questions.length; i++) {
      console.log(questions[i].question_body)
      if (questions[i].question_body === searchValue) {
        console.log('found the question', questions[i])
      } else {
        console.log('no questions match your search. Feel free to write a new one!')
      }
    }
  }
  function handleSearchChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div id='questionList' className={classes.list}>
      <h1>Customer Questions And Answers</h1>
      <TextField
        id='questionSearch'
        label='search for a specific question here'
        className={classes.searchbar}
        variant='outlined'
        name='questionSearch'
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
        )
      }}/>
      <Button onClick={handleSearch} variant='outlined' >Search</Button>
      {/* set current questions */}
      {questions.map(question => {
        return <Question key={question.question_id} question={question}/>
      })}
      <div>
        <QuestionModal styles={classes} questions={questions}/>
        {/* need conditional rendering for the expand Questions button to only show IF there are more questions */}
        <Button id='expandQuestions' variant='contained' onClick={expandQuestions} className={classes.button}>More Answered Questions</Button>
      </div>
    </div>
  )
}


// const sampleQuestions = [
//     {
//     "question_id": 37,
//     "question_body": "Why is this product cheaper here than other sites?",
//     "question_date": "2018-10-18T00:00:00.000Z",
//     "asker_name": "williamsmith",
//     "question_helpfulness": 4,
//     "reported": false,
//     "answers": {
//       68: {
//         "id": 68,
//         "body": "We are selling it here without any markup from the middleman!",
//         "date": "2018-08-18T00:00:00.000Z",
//         "answerer_name": "Seller",
//         "helpfulness": 4,
//         "photos": []
//         // ...
//       }
//     }
//   },
//   {
//     "question_id": 38,
//     "question_body": "How long does it last?",
//     "question_date": "2019-06-28T00:00:00.000Z",
//     "asker_name": "funnygirl",
//     "question_helpfulness": 2,
//     "reported": false,
//     "answers": {
//       70: {
//         "id": 70,
//         "body": "Some of the seams started splitting the first time I wore it!",
//         "date": "2019-11-28T00:00:00.000Z",
//         "answerer_name": "sillyguy",
//         "helpfulness": 6,
//         "photos": [],
//       },
//       78: {
//         "id": 78,
//         "body": "9 lives",
//         "date": "2019-11-12T00:00:00.000Z",
//         "answerer_name": "iluvdogz",
//         "helpfulness": 31,
//         "photos": [],
//       }
//     }
//   },
//   //...
// ];