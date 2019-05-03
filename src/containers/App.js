import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Home from '../components/Home';
import Game from './Game';

import FLAG_DATA from '../constants/FLAG_DATA';
import * as regions from '../constants/regions';
import compressor from '../utils/compression';

const RegionMenuItem = ({ region, children }) => {
  const stack = FLAG_DATA.filter(flag => region === regions.ALL || flag.regions.includes(region)).map(
    flag => flag.code
  );

  const stackString = compressor(FLAG_DATA).compress(stack);

  return (
    <Link to={`/play?stack=${stackString}`} className="item">
      {children}
    </Link>
  );
};

const GithubText = styled.span`
  display: inline-block;
  @media (max-width: 700px) {
    display: none;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui menu borderless">
          <Link to="/" className="item">
            <i className="home icon" />
          </Link>
          <div className="header item" style={{ fontFamily: "'Oswald', san-serif" }}>
            LEARN YOUR FLAGS
          </div>
          <div className="ui simple dropdown item">
            New game
            <i className="dropdown icon" />
            <div className="menu">
              <RegionMenuItem region={regions.ALL}>World</RegionMenuItem>
              <RegionMenuItem region={regions.NORTH_AMERICA}>North America</RegionMenuItem>
              <RegionMenuItem region={regions.CARIBBEAN}>Carribean</RegionMenuItem>
              <RegionMenuItem region={regions.SOUTH_AMERICA}>South America</RegionMenuItem>
              <RegionMenuItem region={regions.EUROPE}>Europe</RegionMenuItem>
              <RegionMenuItem region={regions.MIDDLE_EAST}>Middle East</RegionMenuItem>
              <RegionMenuItem region={regions.AFRICA}>Africa</RegionMenuItem>
              <RegionMenuItem region={regions.ASIA}>Asia</RegionMenuItem>
              <RegionMenuItem region={regions.OCEANIA}>Oceania</RegionMenuItem>
            </div>
          </div>
          <a className="item align right" href="https://github.com/kgsherman/lyf" target="_blank" rel="noopener noreferrer">
            <i className="github icon" />
            <GithubText>View on Github</GithubText>
          </a>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/play" component={Game} />
      </Router>
    );
  }
}

export default App;
