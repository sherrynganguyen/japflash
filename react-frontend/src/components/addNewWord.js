import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

// const getBook = gql`
// {
//   words{
//     eng
//     jap
//     categoryId{
//       name
//     }
//   }
// }
// `;

const addWordMutation = gql`
  mutation($eng: String!, $jap: String!, $categoryId: ID!) {
    addWord(eng: $eng, jap: $jap, categoryId: $categoryId) {
      eng
      jap
    }
  }
`;
function AddNewWord() {
  const [eng, setEng] = useState('');
  const [jap, setJap] = useState('');
  const [caetgory, setCategory] = useState('');

  const handleSubmit = () => {
    console.log('hello')
  }
  return (
    <form id="add-book" onSubmit={handleSubmit}>
      <div className="field">
        <label>Japanese:</label>
        <input type="text" onChange={(e) => setJap(e.target.value)}/>
      </div>
      <div className="field">
        <label>English:</label>
        <input type="text" onChange={(e) => setEng(e.target.value)}/>
      </div>
      <div className="field">
        <label>Category</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          {}
          </select>
          <button></button>
      </div>
    </form>
  )
}

export default graphql(addWordMutation)(AddNewWord);