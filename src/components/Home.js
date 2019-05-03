import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Globe from './Globe';
import * as regions from '../constants/regions';
import FLAG_DATA from '../constants/FLAG_DATA';

import compressor from '../utils/compression';

const Title = styled.h1`
  font-family: 'Oswald', san-serif;
  text-align: center;
  width: 100%;
`;

const Instructions = styled.h4`
  font-style: italic;
`;

const GridContainer = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
`;

const Grid = styled.div`
  position: absolute;
  top: 0;
  right 0;
  bottom: 0;
  left: 0;
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
  const [stackString, setStackString] = useState('');

  useEffect(() => {
    const stack = FLAG_DATA
      .filter(flag => region == regions.ALL || flag.regions.includes(region))
      .map(flag => flag.code);

    const newStackString = compressor(FLAG_DATA).compress(stack);
    setStackString(newStackString);
  }, [region]);

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
        <Instructions>To begin, select a region...</Instructions>
        <GridContainer>
          <Grid>
            {createRegion('World', regions.ALL)}
            {createRegion('North America', regions.NORTH_AMERICA)}
            {createRegion('South America', regions.SOUTH_AMERICA)}
            {createRegion('Europe', regions.EUROPE)}
            {/*<RegionIcon region={hoveredRegion} active={hoveredRegion === region} />*/}
            <Globe region={hoveredRegion} />
            {createRegion('Africa', regions.AFRICA)}
            {createRegion('Asia', regions.ASIA)}
            {createRegion('Middle East', regions.MIDDLE_EAST)}
            {createRegion('Oceania', regions.OCEANIA)}
          </Grid>
        </GridContainer>
        <Link to={`/play?stack=${stackString}`}>
          <button className="fluid ui button primary basic">Go</button>
        </Link>
        <div className="ui horizontal divider">Or</div>
        <Instructions>Paste in a code from a previous game...</Instructions>
        <div className="ui action input fluid">
          <input type="text" placeholder="Paste code here" />
          <button className="ui button">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
