import React from 'react';


export default Question = (props) => {
  return (
    <div>
      <h3>Q:</h3>
        <p>
          I was wondering if these shoes make my hands look big?
        </p>
      <ul id='answer list'>
        <h4>A:</h4>
        <li>
          <h5>answer one</h5>
          <p>absolutely!</p>
          <span>answer helpfulness?<a>y</a><a>n</a></span>
        </li>
        <li>
          <h5>answer two</h5>
          <p>absolutely not!</p>
          <span>answer helpfulness?<a>y</a><a>n</a></span>
        </li>
        <button>expand answers</button>
      </ul>
    </div>
  )
}