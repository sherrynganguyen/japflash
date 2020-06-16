import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddNewWord from './components/addNewWord';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>JapFlash - Test Deploy</h1>
        <AddNewWord/>
      </div>
    </ApolloProvider>
  );
}

export default App;
