import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { flowRight as compose } from 'lodash';
import {
  getWordQuery,
  getCategoriesQuery,
  addWordMutation
} from '../queries/queries';

import './styles.scss';

function AddNewWord() {
  const [eng, setEng] = useState('');
  const [jap, setJap] = useState('');
  const [category, setCategory] = useState('5ee1e5fb556b58436281f5e8');
  const [addWord] = useMutation(addWordMutation);

  //Loading categories
  const { loading, error, data } = useQuery(getCategoriesQuery);
  
  //Rendering categories to the form
  const renderCategories = (data) => {
    if (loading) return <option>Loading...</option>;
    if (error) return <option>Error</option>;
    return data.categories.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addWord({
      variables: {
        eng: eng,
        jap: jap,
        categoryId: category
      },
      refetchQueries: [{query: getWordQuery}]
    })
    setEng('');
  };

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
        <label>Category:</label>
        <select onChange={(e) => setCategory(e.target.value)}>
          {renderCategories(data)}
        </select>
      </div>
      <button>Add</button>
    </form>
  )
}

export default compose(
  graphql(getCategoriesQuery, {name: "getCategoriesQuery"}),
  graphql(addWordMutation, {name: "addWordMutation"})
)(AddNewWord);