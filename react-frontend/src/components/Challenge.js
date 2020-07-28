import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { getWordQuery, findWordQuery } from '../queries/queries';

import { flowRight as compose } from 'lodash';

import './styles.scss';
import Cards from './Cards';

function Challenge () {
  const [eng, setEng] = useState('');
  // const [id, setId] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setEng('');
  };
  const [selected, setSelected] = useState(null);
  const { loading, err, data } = useQuery(getWordQuery)
  if (loading) return <div>Loading words...</div>;
  if (err) return  <div>Error</div>;
  const wordList = data.words;
  let randomWord = wordList[Math.floor(Math.random()*wordList.length)];

  const RenderRandomWord = () => {
    return (
      <div className="challenge-word">
        <form onSubmit={handleSubmit}>
          {/* <p>{randomWord.jap}</p> */}
          <input type="text" placeholder="Enter English meaning" onChange={(e) => setEng(e.target.value)}></input>
        </form>
      </div>
    )
  }

  return (
    <div className="challenge">
      <h2>Challenge</h2>
      <p>{randomWord.jap}</p>
      {RenderRandomWord()}
    </div>
    
  )
}

export default compose(
  graphql(getWordQuery, {name: "getWordQuery"}),
  graphql(findWordQuery, {
    options: (props) => {
      console.log(props)
    }
  })
)(Challenge);