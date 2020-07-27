import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useSprings, animated, interpolate } from 'react-spring';
import { useGesture } from 'react-use-gesture';
// import { flowRight as compose } from 'lodash';
import { getWordQuery } from '../queries/queries';

import './styles.scss';
import Cards from './Cards';
// import Deck from './Cards'
import WordDetails from './WordDetails';


export default function FlashCards() {
  
  const cards = [
    'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
    'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
    'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
    'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
  ]
  
  const WordsList = () => {
    const [selected, setSelected] = useState(null);
    const { loading, err, data } = useQuery(getWordQuery)
    if (loading) return <div>Loading words...</div>;
    if (err) return  <div>Error</div>;
    // return (
    //   <div>
    //     {data.words.map(word => {
    //       console.log(word)
    //       return <WordDetails word={word}/>;
    //     })}
    //   </div>
    // )
    return <Cards list={data.words}/>
    // return <Deck cards={cards}/>
  }

  return (
    <div className="flashCards">
      {/* <h2>Flash</h2> */}
      {WordsList()}
    </div>
    
  )
}
