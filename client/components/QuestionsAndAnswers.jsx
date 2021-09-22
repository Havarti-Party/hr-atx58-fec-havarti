import React, { useState, useEffect, useContext, createContext } from 'react';

import axios from 'axios';

import { ProductsContext } from './ProductsContext.jsx';
import Question from './Question.jsx';
import QuestionModal from './QuestionModal.jsx';
import AnswerModal from './AnswerModal.jsx';
import ExpandQuestions from './QuestionExpand.jsx';

import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


const questionListStyles = makeStyles({
  widget: {
    height: '800px',
  },
  modal: {
  },
  button: {
    padding: '0 5px',
    margin: '10px',
  },
  searchbar: {
    margin: '10px',
    width: '100%',
  },
  list: {
    height: '500px',
    overflow: 'auto',
  },
})

export const QuestionsContext = createContext()

export default function QuestionsAndAnswers() {
  const classes = questionListStyles()
  const { overviewProduct } = useContext(ProductsContext)
  const [ overviewProductState, setOverviewProductState ] = overviewProduct;
  const [ productId, setProductId ] = useState(0);
  const [ questions, setQuestions ] = useState([])
  const [ searchValue, setSearchValue ] = useState('');

  const [ questionDisplayCount, setQuestionDisplayCount ] = useState(2);
  const [ currentQuestions, setCurrentQuestions ] = useState(questions.slice(0, 2))

  useEffect(() => {
      axios.get('/qa', {
        params: {
          id: overviewProductState.id,
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
  }, [overviewProductState])

  useEffect(() => {
    setCurrentQuestions(questions.slice(0, questionDisplayCount))
    setProductId(overviewProductState.id);
  }, [questions])

  useEffect(() => {
  }, [currentQuestions])

  useEffect(() => {
    setCurrentQuestions(questions.slice(0, questionDisplayCount))
  }, [questionDisplayCount])

  return (
    <div id='questionList' className={classes.widget}>
    <QuestionsContext.Provider value={[questions, setQuestions]}>
      <Grid container spacing={2}>
        <Grid item md={2}>
        </Grid>
        <Grid item md={10}>
          <h1>Customer Questions And Answers</h1>
        </Grid>
        <Grid item md={2}>
        </Grid>
        <Grid item md={4}>
          <TextField
            id='questionSearch'
            label='Have a question? Search for answers…'
            className={classes.searchbar}
            variant='outlined'
            name='questionSearch'
            onChange={(e) => {setSearchValue(e.target.value)}}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
            )
          }}/>
        </Grid>
        <Grid item sm={1} />
        <Grid item md={2}>
          {/* <QuestionsContext.Provider value={[questions, setQuestions]}> */}
            <QuestionModal styles={classes} product_id={productId}/>
          {/* </QuestionsContext.Provider > */}
        </Grid>
        <Grid item xl={2}>
        </Grid>
        <Grid item md={10} className={classes.list}>
          {currentQuestions.filter((question) => {
            if (searchValue === '') {
              return question;
            } else if (question.question_body.toLowerCase().includes(searchValue.toLowerCase())) {
              return question;
            }
          }).map(question => {
            return <Question key={question.question_id} question={question} style={classes} product_id={productId}/>
          })}
        </Grid>
        <Grid item md={2}>
        </Grid>
        <Grid item md={4}>
          <QuestionsContext.Provider value={[questionDisplayCount, setQuestionDisplayCount]} >
            <ExpandQuestions style={classes} questions={questions} currentQuestions={currentQuestions}/>
          </QuestionsContext.Provider>
        </Grid>
      </Grid>
    </QuestionsContext.Provider>
    </div>
  )
}



{/* <QuestionsContext.Provider value={[questions, setQuestions], [questionDisplayCount, setQuestionDisplayCount]}>
<ExpandQuestions currentQuestions={currentQuestions} style={classes}/>
</QuestionsContext.Provider> */}

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