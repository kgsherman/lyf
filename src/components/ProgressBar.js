import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import TimeContext from '../context/TimeContext';

const Bar = styled.div`
  display: flex;
  position: relative;
  border: none;
  border-radius: 0.286rem;
  padding: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 1em;
  margin: 0em;
`;

const BarWrapper = styled.div`
  display: flex;
  width: ${props => props.percentage * 100}%;
  border: none;
  border-radius: 0.286rem;
  overflow: hidden;
`;

const BarBlock = styled.div`
  width: ${props => (props.percentage * 100).toFixed(3)}%;
  background-color: ${props => props.color};
`;

const BarLabel = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  top: 100%;
  margin: -0.8em 0 1em;
`;

const ProgressBar = ({ right, skipped, wrong, total }) => {
  const [elapsedMs, setElapsedMs] = useState(0);
  
  const timeContext = useContext(TimeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedMs(i => i + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      timeContext.setValue(elapsedTime())
  }, [elapsedMs]);

  const elapsedTime = () => {
    let mins = parseInt((elapsedMs / (1000 * 60)) % 60);
    let seconds = parseInt((elapsedMs / 1000) % 60);

    mins = mins < 10 ? '0' + mins : mins;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${mins}:${seconds}`;
  };

  const done = right + skipped + wrong;

  return (
    <>
      <div className="ui card centered">
        <Bar>
          <BarWrapper percentage={done / total}>
            <BarBlock percentage={right / done} color="#21ba45" />
            <BarBlock percentage={skipped / done} color="#fbbd08" />
            <BarBlock percentage={wrong / done} color="#db2828" />
          </BarWrapper>
        </Bar>
      </div>
      <BarLabel>{elapsedTime()}</BarLabel>
    </>
  );
};

export default ProgressBar;
