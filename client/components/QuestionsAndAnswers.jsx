import React from 'react';
import Queston from './Question.jsx'

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
      <div>
        <h1>Questions And Answers</h1>
        {this.state.questions.map(question => {
          return <Question />
        })}
      </div>
    )
  }
}


export default QuestionsAndAnswers
