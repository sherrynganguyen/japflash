import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
// import { flowRight as compose } from 'lodash';
import {
  getWordQuery,
  getCategoriesQuery,
  addWordMutation
} from '../queries/queries';

import './styles.scss';
import WordDetails from './wordDetails';

export default function FlashCards() {
  
  const WordsList = () => {
    const [selected, setSelected] = useState(null);
    const { loading, err, data } = useQuery(getWordQuery)
    if (loading) return <div>Loading words...</div>;
    if (err) return  <div>Error</div>;
    return (
      <div>
        {data.words.map(word => {
          console.log(word)
          return <WordDetails word={word}/>;
        })}
      </div>
    )
  }

  return (
    <div>
      <h2>Flash</h2>
      {WordsList()}
    </div>
    
  )
}
