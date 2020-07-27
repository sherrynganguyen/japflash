import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './app.scss';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddNewWord from './components/AddNewWord';
import FlashCards from './components/FlashCards';
import MainPage from './components/MainPage';
import Report from './components/Report';
import ToggleButton from './components/ToggleNavbar/ToggleButton';
import SideDrawer from './components/ToggleNavbar/SideDrawer';
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  
});

function App() {

  const [display, setDisplay] = useState(false);

  const handleToggle = () => {
    setDisplay((prevDisplay) => {
      return {display: !prevDisplay.display}
    })
  };

  return (
    <Router>
        <ToggleButton toggle={handleToggle}/>
        <SideDrawer show={display}/>
        <Switch>
          <ApolloProvider client={client}>
            <Route exact path="/" component={MainPage}></Route>
            <Route path="/input" component={AddNewWord}></Route>
            <Route path="/flashcards" component={FlashCards}></Route>
            <Route path="/challenge" component={FlashCards}></Route>
            <Route path="/multiple" component={FlashCards}></Route>
            <Route path="/report" component={Report}></Route>
          </ApolloProvider>
        </Switch>
      </Router>
  );
}

export default App;
