import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.scss';
import { gql } from 'apollo-boost'
import AddNewWord from './components/addNewWord';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  
});

function App() {
  client
  .query({
    query: gql`
      {
        words{
          eng
          jap
          categoryId{
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result));

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome to JapFlash</h1>
        <AddNewWord/>
      </div>
    </ApolloProvider>
  );
}

export default App;
