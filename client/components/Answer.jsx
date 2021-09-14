import React, { useState } from 'react';


export default function Answer({answerData}) {
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness)

  //eventually these buttons will send axios requests to update this information in the api/database
  function incrementHelpfulCount() {
    setHelpfulCount(prevCount => prevCount + 1);
  }

  function decrementHelpfulCount() {
    setHelpfulCount(prevCount => prevCount - 1);
  }
  //conditional based on if the answer came from the Seller: make the name say seller and BOLD it
  //additional conditional based on if its the first answer/top answer in the list

  // if (answerData.answerer_name === 'Seller') {
  return (
    <div class='answer'>
      <h3>A: {answerData.body}</h3>
      {/* add an on hover feature for the helpfulness section to make it pop*/}
      {/* make the date and answer creator styled to be faded */}
      <span><p>by: {answerData.answerer_name}, {answerData.date.slice(0, 10)} | answer helpfulness:<a onClick={() => incrementHelpfulCount()}>yes ({helpfulCount})</a>/<a onClick={() => decrementHelpfulCount()}>no</a></p></span>
      <br/>
    </div>
  )
}