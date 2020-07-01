import React from 'react';

import {graphql} from 'react-apollo';

import { getWordQuery } from '../queries/queries';

function WordDetails({word}) {
  const displayBookDetails = () => {
    if (word) {
      return (
        <div>
          <h2>Japanese: {word.jap}</h2>
          <p>English: {word.eng}</p>
          <p>Category: {word.category}</p>
        </div>
      )
    }
  };
  
  return (
    <div id="word-details">
      {displayBookDetails()}
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
