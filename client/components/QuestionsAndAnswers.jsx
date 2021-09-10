import React from 'react';
import Question from './Question.jsx'

class QuestionsAndAnswers extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      questions: [1, 2, 3, 4],
      answers: [],
    }

  }


  render() {
    return (
      <div id='questionList'>
        <h1>Questions And Answers</h1>
        {this.state.questions.map(item => {
          return <Question />
        })}
      </div>
    )
  }
}


export default QuestionsAndAnswers
