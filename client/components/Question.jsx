import React, { useState }from 'react';
import AnswerList from './AnswerList.jsx'



export default function Question() {

  return (
    <div class='question' >
      {/* id={question_id} */}
      <h3 class='questionBody'>
        Q: {/* question_body */}
          I was wondering if these shoes make my hands look big?
      </h3>

        <span class='userDate'>
          {/* question_date and needs to refactor to Month DD, YYYY*/}
          Made by User, 2019-11-12
        </span>
      <ul id='answer list'>
        <li>
          <h4>A:</h4>
          <h5>answer one</h5>
          <p>absolutely!</p>
          <span>answer helpfulness:<a>y</a>/<a>n</a></span>
        </li>
        <li>
          <h4>A:</h4>
          <h5>answer two</h5>
          <p>absolutely not!</p>
          <span>answer helpfulness:<a>y</a>/<a>n</a></span>
        </li>
        <button>expand answers</button>
      </ul>

    </div>
  )
}