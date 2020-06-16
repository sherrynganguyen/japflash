import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';

import {
  getCategories,
  addWordMutation,
} from '../queries/queries';



function AddNewWord() {
  const [eng, setEng] = useState('');
  const [jap, setJap] = useState('');
  const [category, setCategory] = useState('');

  //Loading categories
  const { loading, error, data } = useQuery(getCategories);
  
  //Rendering categories to the form
  const renderCategories = (data) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    return data.categories.map((category) => {
      return <option key={category.id} value={category.id}>{category.name}</option>
    });
  };

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
          {renderCategories(data)}
        </select>
        <button>+</button>
      </div>
    </form>
  )
}

export default graphql(addWordMutation)(AddNewWord);