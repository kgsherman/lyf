import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../components/Home';
import Game from './Game';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui menu borderless">
          <a class="item">
            <i class="home icon" />
          </a>
          <div class="header item" style={{ fontFamily: "'Oswald', san-serif"}}>LEARN YOUR FLAGS</div>

          <a class="item align right" href="https://github.com/kgsherman/lyf" target="_blank">
            <i class="github icon" />
            View on Github
          </a>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/play" component={Game} />
      </Router>
    );
  }
}

export default App;
