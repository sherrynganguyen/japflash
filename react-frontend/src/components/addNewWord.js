import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

const getBook = gql`
{
  words{
    eng
    jap
    categoryId{
      name
    }
  }
}
`;
function AddNewWord() {
  const { loading, error, data } = useQuery(getBook);
  console.log(data)
  return (
    <div>

      <h2>Add New Word</h2>
      <p>{data}</p>
    </div>
    )
}

export default graphql(getBook)(AddNewWord);