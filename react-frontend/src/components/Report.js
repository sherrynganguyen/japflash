import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {graphql} from 'react-apollo';

import { getWordQuery } from '../queries/queries';

export default function Report() {
  
  const ReportList = () => {
    const [selected, setSelected] = useState(null);
    const { loading, err, data } = useQuery(getWordQuery)
    if (loading) return <div>Loading words...</div>;
    if (err) return  <div>Error</div>;
    return (
      <div className="report">
        <h2>Total Words Learned: {data.words.length}</h2>
        <h3>Nouns: {data.words.filter(word =>  
            word.categoryId.name === "noun"
          ).length}
        </h3>
        <h3>Verbs: {data.words.filter(word =>  
            word.categoryId.name === "verb"
          ).length}
        </h3>
        <h3>i-Adjective: {data.words.filter(word =>  
            word.categoryId.name === "i-adjective"
          ).length}
        </h3>
        <h3>na-Adjective: {data.words.filter(word =>  
            word.categoryId.name === "na-adjective"
          ).length}
        </h3>
      </div>
    )
  }

  return (
    <div>
      <h2>Flash</h2>
      {ReportList()}
    </div>
    
  )
}

