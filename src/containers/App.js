import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Home from '../components/Home';
import Game from './Game';

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Game} />
      </Router>
    );
  }
}

export default App;
