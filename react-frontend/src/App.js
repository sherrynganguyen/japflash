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

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div>
        <h1 className="title">JapFlash</h1>
        <nav className="navbar">
          <Link to="/input">Input</Link>
          <Link to="/flashcards">FlashCards</Link>
          <Link to="/challenge">Challenge</Link>
          <Link to="/multiple">Multiple</Link>
          <Link to="/multiple">Report</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/flashcards">
            <FlashCards />
          </Route>
          <Route path="/input">
            <div className="App">
              <AddNewWord />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
