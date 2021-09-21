import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const AnswerStyles = makeStyles({
  report: {
    color: 'red',
  }
})

export default function Answer({answerData}) {
  const [helpfulCount, setHelpfulCount] = useState(answerData.helpfulness)
  const classes = AnswerStyles()
  //eventually these buttons will send axios requests to UPDATE this information in the api/database
  function incrementHelpfulCount() {
    //axios.update
    setHelpfulCount(prevCount => prevCount + 1);
  }

  function decrementHelpfulCount() {
    setHelpfulCount(prevCount => prevCount - 1);
  }
  //conditional based on if the answer came from the Seller: make the name say seller and BOLD it
  //additional conditional based on if its the first answer/top answer in the list
  function handleReport() {
    //will need to XpostX (not post, but update) the reported data to server
    //axios.post('/qa/reportAnswer', {how to })
  }

  // if (answerData.answerer_name === 'Seller') {
  //   console.log('bold this name')
  // }
  return (
    <div className='answer'>
      <h3>A: {answerData.body}</h3>
      <div>
        {answerData.photos.map((image, index) => {
          var tempIndex = image.indexOf('crop') + 4;
          var slicedUrl = image.slice(0, tempIndex);
          var newUrl = (slicedUrl + '&w=100&q=80')
          return <img src={newUrl} key={index} />
        })}
      </div>
      <span>
        <p>by: {answerData.answerer_name}, {answerData.date.slice(0, 10)} | answer helpfulness:
          <a href='' onClick={() => incrementHelpfulCount()}>yes ({helpfulCount})</a>/<a href='' onClick={() => decrementHelpfulCount()}>no</a>
          <br />
          <a href='' onClick={handleReport}className={classes.report}>report</a>
        </p>
      </span>
      <br/>
    </div>
  )
}