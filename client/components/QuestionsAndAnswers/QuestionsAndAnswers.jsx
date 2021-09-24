/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, createContext } from "react";

import axios from "axios";

import { ProductsContext } from "../ProductsContext.jsx";
import Question from "./Question.jsx";
import QuestionModal from "./QuestionModal.jsx";
import ExpandQuestions from "./QuestionExpand.jsx";

import Grid from "@mui/material/Grid";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from '@mui/material/Typography';
import SearchIcon from "@material-ui/icons/Search";

import { makeStyles } from "@material-ui/core/styles";

const questionListStyles = makeStyles({
  widget: {
    height: "800px",
  },
  button: {
    padding: "0 5px",
    margin: "10px",
  },
  addQuestion: {
    padding: "0 5px",
    margin: "10px",
    height: '50px',
    width: '100%',
  },
  searchbar: {
    margin: "10px",
    width: "100%",
  },
  list: {
    height: "500px",
    overflow: "auto",
  },
});

export const QuestionsContext = createContext();

export default function QuestionsAndAnswers() {
  const classes = questionListStyles();
  const { overviewProduct, clickTracker } = useContext(ProductsContext);
  const [overviewProductState, setOverviewProductState] = overviewProduct;
  const [clickTrackerFunc] = clickTracker;
  const [productId, setProductId] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const [questionDisplayCount, setQuestionDisplayCount] = useState(4);
  const [currentQuestions, setCurrentQuestions] = useState(
    questions.slice(0, 4)
  );

  useEffect(() => {
    axios
      .get("/qa", {
        params: {
          id: overviewProductState.id,
        },
      })
      .then((response) => {
        var newQuestions = response.data.results;
        setQuestions(
          newQuestions.sort((a, b) => {
            a.question_helpfulness - b.question_helpfulness;
          })
        );
      })
      .catch((error) => {
        console.log(
          "Error retrieving related questions for this product",
          error
        );
      });
  }, [overviewProductState]);

  useEffect(() => {
    setCurrentQuestions(questions.slice(0, questionDisplayCount));
    setProductId(overviewProductState.id);
  }, [questions]);

  // useEffect(() => {}, [currentQuestions]);

  useEffect(() => {
    setCurrentQuestions(questions.slice(0, questionDisplayCount));
  }, [questionDisplayCount]);

  return (
    <div id="questionList" className={classes.widget}>
      <QuestionsContext.Provider value={[questions, setQuestions]}>
        <Grid container spacing={2} >
          <Grid item md={12} onClick={() =>
            clickTrackerFunc.clickTrackerFunc('Q/A header', event.target)
          }>
            <Typography variant='h4' >Customer Questions And Answers</Typography>
          </Grid>
          <Grid item md={8} onClick={() =>
            clickTrackerFunc.clickTrackerFunc('Question search bar', event.target)
          }>
            <TextField
              id="questionSearch"
              label="Have a question? Search for answers…"
              className={classes.searchbar}
              variant="outlined"
              name="questionSearch"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs onClick={() =>
            clickTrackerFunc.clickTrackerFunc('add a question modal', event.target)
          }>
            <QuestionModal styles={classes} product_id={productId} />
          </Grid>
          <Grid item md={12} className={classes.list} onClick={() =>
            clickTrackerFunc.clickTrackerFunc('Q/A list', event.target)
          }>
            {currentQuestions
              .filter((question) => {
                if (searchValue === "") {
                  return question;
                } else if (
                  question.question_body
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                ) {
                  return question;
                }
              })
              .map((question) => {
                return (
                  <Question
                    key={question.question_id}
                    question={question}
                    style={classes}
                    product_id={productId}
                    questions={questions}
                    onClick={() =>
                      clickTrackerFunc.clickTrackerFunc('Question Tile', event.target)
                    }
                  />
                );
              })}
          </Grid>
          <Grid item md={4}>
            <QuestionsContext.Provider
              value={[questionDisplayCount, setQuestionDisplayCount]}
            >
              <ExpandQuestions
                style={classes}
                questions={questions}
                currentQuestions={currentQuestions}
                onClick={() =>
                  clickTrackerFunc.clickTrackerFunc('more questions button', event.target)
                }
              />
            </QuestionsContext.Provider>
          </Grid>
        </Grid>
      </QuestionsContext.Provider>
    </div>
  );
}

{
  /* <QuestionsContext.Provider value={[questions, setQuestions], [questionDisplayCount, setQuestionDisplayCount]}>
<ExpandQuestions currentQuestions={currentQuestions} style={classes}/>
</QuestionsContext.Provider> */
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
