import React, { Component, useState, useEffect } from 'react';
import { shuffle } from 'shuffle-seed';
import styled from 'styled-components';
import queryString from 'query-string';

import FlagCard from '../components/FlagCard';
import GuessingControls from '../components/GuessingControls';
import SuccessBox from '../components/SuccessBox';
import FailureBox from '../components/FailureBox';
import ProgressBar from '../components/ProgressBar';
import Summary from '../components/Summary';

import { TimeProvider } from '../context/TimeContext';

import FLAG_DATA from '../constants/FLAG_DATA';
import * as STAGE from '../constants/stages';
import compressor from '../utils/compression';
import generateSeed from '../utils/generateSeed';

const Game = props => {
  const initializeStack = (stackCode = '00', seed = generateSeed()) => {
    const countryCodes = compressor(FLAG_DATA).decompress(stackCode);
    const stack = countryCodes.map(code => {
      const flagData = FLAG_DATA.find(flag => flag.code === code);
      return {
        ...flagData,
        guesses: []
      };
    });

    const shuffledStack = shuffle(stack, seed);
    return shuffledStack;
  };

  const [elapsedTime, setElapsedTime] = useState(0);
  const [doingStack, setDoingStack] = useState([]);
  const [rightStack, setRightStack] = useState([]);
  const [wrongStack, setWrongStack] = useState([]);
  const [stage, setStage] = useState(STAGE.GUESSING);

  useEffect(() => {
    const queries = queryString.parse(props.location.search);
    const newStack = initializeStack(queries.stack, queries.seed);

    setDoingStack(newStack);
    setRightStack([]);
    setWrongStack([]);
    setStage(STAGE.GUESSING);
  }, [props.location]);

  useEffect(() => {
    if (doingStack.length > 1) {
      const flagImg = new Image();
      flagImg.src = doingStack[1].url;
    }
  }, [doingStack]);

  const onSuccess = guesses => {
    setStage(STAGE.SUCCESS);
    setDoingStack([
      {
        ...doingStack[0],
        guesses
      },
      ...doingStack.slice(1)
    ]);
  };

  const onFail = guesses => {
    setStage(STAGE.GIVE_UP);
    setDoingStack([
      {
        ...doingStack[0],
        guesses
      },
      ...doingStack.slice(1)
    ]);
  };

  const onSkip = guesses => {
    setDoingStack([
      ...doingStack.slice(1),
      {
        ...doingStack[0],
        guesses
      }
    ]);
  };

  const onNext = success => {
    success ? setRightStack([...rightStack, doingStack[0]]) : setWrongStack([...wrongStack, doingStack[0]]);
    doingStack.length > 1 ? setStage(STAGE.GUESSING) : setStage(STAGE.SUMMARY);
    setDoingStack(doingStack.slice(1));
  };

  const getRetryStack = () => {
    if (wrongStack.length === 0)
      return null;
      
    const stack = wrongStack.map(flag => flag.code);
    const stackString = compressor(FLAG_DATA).compress(stack);

    return stackString;
  }

  const GameControl = ({ stage, flagData }) => {
    switch (stage) {
      case STAGE.GUESSING:
        return <GuessingControls data={flagData} onSuccess={onSuccess} onSkip={onSkip} onGiveUp={onFail} />;
      case STAGE.SUCCESS:
        return <SuccessBox data={flagData} onNext={() => onNext(true)} />;
      case STAGE.GIVE_UP:
        return <FailureBox data={flagData} onNext={() => onNext(false)} />;
      default:
        return null;
    }
  };

  return doingStack.length > 0 ? (
    <TimeProvider>
      <ProgressBar
        right={rightStack.filter(flag => flag.guesses.length === 1).length}
        skipped={rightStack.filter(flag => flag.guesses.length > 1).length}
        wrong={wrongStack.length}
        total={rightStack.length + wrongStack.length + doingStack.length}
      />
      <FlagCard url={doingStack[0].url} />
      <GameControl stage={stage} flagData={doingStack[0]} />
    </TimeProvider>
  ) : stage && stage === STAGE.SUMMARY ? (
    <TimeProvider>
      <Summary
        right={rightStack.length}
        wrong={wrongStack.length}
        perfect={rightStack.filter(flag => flag.guesses.length === 1).length}
        avg={
          rightStack.length ? rightStack.reduce((total, flag) => total + flag.guesses.length, 0) / rightStack.length : '∞'
        }
        total={rightStack.length + wrongStack.length}
        stackString={getRetryStack()}
      />
    </TimeProvider>
  ) : null;
};

export default Game;
