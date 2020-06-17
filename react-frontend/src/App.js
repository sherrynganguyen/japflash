import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './app.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddNewWord from './components/addNewWord';
import FlashCards from './components/flashCards';
import MainPage from './components/mainPage';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  
});

function App() {
  return (
      <Router>
        <Switch>
          <ApolloProvider client={client}>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/input" component={AddNewWord}></Route>
            <Route path="/flashcards" component={FlashCards}></Route>
          </ApolloProvider>
        </Switch>
      </Router>
  );
}

export default App;
