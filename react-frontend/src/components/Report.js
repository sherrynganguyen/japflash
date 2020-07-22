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
      <div>
        {data.words.length}
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

