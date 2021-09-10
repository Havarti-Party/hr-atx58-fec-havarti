import React from 'react';

var qStyle = {
  color: 'black'
}

var Question = (props) => {
  return (
    <div id='question'>
      <h3>Q:</h3>
        <p>
          I was wondering if these shoes make my hands look big?
        </p>
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

export default Question;