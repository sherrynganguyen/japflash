import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { getWordQuery } from '../queries/queries';
import { flowRight as compose } from 'lodash';

import './styles.scss';
import Cards from './Cards';

export default function FlashCards() {
  const WordsList = () => {
    const [selected, setSelected] = useState(null);
    const { loading, err, data } = useQuery(getWordQuery)
    if (loading) return <div>Loading words...</div>;
    if (err) return  <div>Error</div>;
    return <Cards list={data.words}/>
  }

  return (
    <div className="flashCards">
      <h2>Flash</h2>
      {WordsList()}
    </div>
    
  )
}
