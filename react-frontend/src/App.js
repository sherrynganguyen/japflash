import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Welcome to JapFlash</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
