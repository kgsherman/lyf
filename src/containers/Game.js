import React, { Component, useState, useEffect } from 'react';
import { shuffle } from 'shuffle-seed';
import styled from 'styled-components';
import queryString from 'query-string';

import FlagCard from '../components/FlagCard';
import GuessingControls from '../components/GuessingControls';
import SuccessBox from '../components/SuccessBox';
import FailureBox from '../components/FailureBox';

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
  }, [doingStack])

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
    setDoingStack(doingStack.slice(1));
    setStage(STAGE.GUESSING);
  };

  const GameControl = ({ stage, flagData }) => {
    switch (stage) {
      case STAGE.GUESSING:
        return <GuessingControls data={flagData} onSuccess={onSuccess} onSkip={onSkip} onGiveUp={onFail} />;
      case STAGE.SUCCESS:
        return <SuccessBox data={flagData} onNext={() => onNext(true)} />;
      case STAGE.GIVE_UP:
        return <FailureBox data={flagData} onNext={() => onNext(false)} />;
    }
  };

  return doingStack.length ? (
      <>
        <FlagCard url={doingStack[0].url} />
        <GameControl stage={stage} flagData={doingStack[0]} />
      </>
    ) : null;
};
/*
class GameOld extends Component {
  state = {
    doingStack: this.initializeStack(),
    rightStack: [],
    wrongStack: [],
    stage: GUESSING
  };

  initializeStack(options = {}) {
    const queries = queryString.parse(this.props.location.search);

    const stackCode = this.props.match.params.stack || '00';

    const countryCodes = compressor(FLAG_DATA).decompress(stackCode);
    const stack = countryCodes.map(code => {
      const flagData = FLAG_DATA.find(flag => flag.code === code);
      return {
        ...flagData,
        guesses: []
      };
    });

    const seed =
      queries.seed ||
      Math.random()
        .toString(36)
        .substring(7);
    const shuffledStack = shuffle(stack, seed);

    return shuffledStack;
  }

  onSuccess = guesses => {
    const stack = this.state.doingStack;
    const current = stack[0];

    this.setState({
      stage: SUCCESS,
      doingStack: [{ ...current, guesses }, ...stack.slice(1)]
    });
  };

  onFail = guesses => {
    const stack = this.state.doingStack;
    const current = stack[0];

    this.setState({
      stage: GIVE_UP,
      doingStack: [{ ...current, guesses }, ...stack.slice(1)]
    });
  };

  onSkip = guesses => {
    const stack = this.state.doingStack;
    const current = stack[0];

    this.setState({
      doingStack: [...stack.slice(1), { ...current, guesses }]
    });
  };

  onNext = success => {
    const moveToStack = success ? 'rightStack' : 'wrongStack';
    this.setState({
      [moveToStack]: [...this.state[moveToStack], this.state.doingStack[0]],
      doingStack: this.state.doingStack.slice(1),
      stage: GUESSING
    });
  };

  convertStageToComponents = () => {
    switch (this.state.stage) {
      case GUESSING:
        return (
          <>
            <FlagCard url={this.state.doingStack[0].url} />
            <GuessingControls
              data={this.state.doingStack[0]}
              onSuccess={this.onSuccess}
              onSkip={this.onSkip}
              onGiveUp={this.onFail}
            />
          </>
        );
      case SUCCESS:
        return (
          <>
            <FlagCard url={this.state.doingStack[0].url} />
            <SuccessBox data={this.state.doingStack[0]} onNext={() => this.onNext(true)} />
          </>
        );
      case GIVE_UP:
        return (
          <>
            <FlagCard url={this.state.doingStack[0].url} />
            <FailureBox data={this.state.doingStack[0]} onNext={() => this.onNext(false)} />
          </>
        );
    }
  };

  render() {
    return (
      <>
        <this.convertStageToComponents />
      </>
    );
  }
}
*/
export default Game;
