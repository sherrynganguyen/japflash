import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

import {graphql} from 'react-apollo';

import { getWordQuery } from '../queries/queries';

function WordDetails({word}) {

  const [flipped, setFlipped] = useState(false);
  const handleFlipped = (e) => {
    e.preventDefault();
    setFlipped((prevFlipped) => {
      return {flipped: !prevFlipped.flipped}
    })
  };


  const displayWordDetails = (word) => {

    
    if (word) {
      return (
        <div className="flip">
          <ReactCardFlip
            isFlipped={flipped}
            flipDirection="horizontal"
            infinite="true"
            flipSpeedBackToFront="2"
            flipSpeedFrontToBack="2"
          >
          <div>
            This is the front of the card.
            <h2>Japanese: {word.jap}</h2>
            <button onClick={handleFlipped}>Click to flip</button>
          </div>
  
          <div>
            This is the back of the card.
            <p>English: {word.eng}</p>
            <p>Category: {word.category}</p>
            <button onClick={handleFlipped}>Click to flip</button>
          </div>
        </ReactCardFlip>

        </div>
      )
    }
  };
  
  return (
    <div id="word-details">
      {displayWordDetails(word)}
    </div>
  );
}

export default graphql(getWordQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.wordId
      }
    }
  }
})(WordDetails);
