import React from 'react';

// var product = {
//   "product_id": "5", //product id
//   "results": [{ //results include all questions on this product
//         "question_id": 37, //id for this question within an assumed question database
//         "question_body": "Why is this product cheaper here than other sites?", //question text
//         "question_date": "2018-10-18T00:00:00.000Z",
//         "asker_name": "williamsmith",
//         "question_helpfulness": 4,
//         "reported": false,
//         "answers": {  //answer's list gets populated from here
//           68: {
//             "id": 68,
//             "body": "We are selling it here without any markup from the middleman!",
//             "date": "2018-08-18T00:00:00.000Z",
//             "answerer_name": "Seller",
//             "helpfulness": 4,
//             "photos": []
//             // ...
//           }
//         }
//       },
//       {
//         "question_id": 38,
//         "question_body": "How long does it last?",
//         "question_date": "2019-06-28T00:00:00.000Z",
//         "asker_name": "funnygirl",
//         "question_helpfulness": 2,
//         "reported": false,
//         "answers": {
//           70: {
//             "id": 70,
//             "body": "Some of the seams started splitting the first time I wore it!",
//             "date": "2019-11-28T00:00:00.000Z",
//             "answerer_name": "sillyguy",
//             "helpfulness": 6,
//             "photos": [],
//           },
//           78: {
//             "id": 78,
//             "body": "9 lives",
//             "date": "2019-11-12T00:00:00.000Z",
//             "answerer_name": "iluvdogz",
//             "helpfulness": 31,
//             "photos": [],
//           }
//         }
//       },
//       // ...
//   ]
// }


var Question = (props) => {
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

export default Question;