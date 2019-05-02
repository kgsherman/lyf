import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-family: 'Oswald', san-serif;
  text-align: center;
  width: 100%;
`;

const Instructions = styled.h4`
  font-style: italic;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const RegionIcon = ({ region, active }) => {
  return (
    <div style={{ opacity: active ? 1 : 0.5 }}>
      <img src={`regions/${region}_icon.png`} width="100%" />
    </div>
  );
};

const Region = props => {
  const onHover = () => {
    props.onHover(props.region);
  };

  const onLeave = () => {
    props.onLeave(props.region);
  };

  const onClick = e => {
    e.preventDefault();
    props.onClick(props.region);
  };

  return (
    <GridItem onMouseOver={onHover} onMouseOut={onLeave} onClick={onClick}>
      {props.active ? (
        <button className={`ui button circular basic tiny compact active`}>{props.children}</button>
      ) : (
        props.children
      )}
    </GridItem>
  );
};

const Home = props => {
  const [region, setRegion] = useState('all');
  const [hoveredRegion, setHoveredRegion] = useState('all');

  const createRegion = (text, value) => {
    return (
      <Region
        onHover={() => setHoveredRegion(value)}
        onLeave={() => setHoveredRegion(region)}
        onClick={() => setRegion(value)}
        active={region === value}
      >
        {text}
      </Region>
    );
  };

  return (
    <div className="ui card centered">
      <div className="content">
        <Title>LEARN YOUR FLAGS</Title>
      </div>
      <div className="content">
        <Instructions>To begin, select a region</Instructions>
        <Grid>
          {createRegion('World', 'all')}
          {createRegion('North America', 'na')}
          {createRegion('South America', 'sa')}
          {createRegion('Europe', 'eu')}
          <RegionIcon region={hoveredRegion} active={hoveredRegion === region} />
          {createRegion('Africa', 'afr')}
          {createRegion('Asia', 'asia')}
          {createRegion('Middle East', 'me')}
          {createRegion('Oceania', 'ocea')}
        </Grid>
        <Link to={'/play'}>
          <button className="fluid ui button primary">
            Go
          </button>
        </Link>
        <div class="ui horizontal divider">Or</div>
        <Instructions>Paste in a code from a previous game</Instructions>
        <div class="ui action input fluid">
          <input type="text" placeholder="Paste code..." />
          <button className="ui button">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
