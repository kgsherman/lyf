import React, { Component } from 'react';
import { shuffle } from 'shuffle-seed';
import styled from 'styled-components';

import FlagCard from '../components/FlagCard';
import GuessingControls from '../components/GuessingControls';
import SuccessBox from '../components/SuccessBox';
import FailureBox from '../components/FailureBox';

import FLAG_DATA from '../constants/FLAG_DATA';
import { GUESSING, SUCCESS, GIVE_UP, SUMMARY } from '../constants/stages';

class Game extends Component {
  state = {
    doingStack: this.initializeStack(),
    rightStack: [],
    wrongStack: [],
    stage: GUESSING
  };

  initializeStack(options = {}) {
    let stack = FLAG_DATA;

    // filter regions
    if (options.regions) {
      stack = stack.filter(flag => flag.regions.some(region => options.regions.includes(region)));
    }

    // shuffle using random seed
    const seed = Math.random()
      .toString(36)
      .substring(7);
    stack = shuffle(stack, seed);

    // initialize game things
    stack = stack.map(item => ({
      ...item,
      guesses: []
    }));

    return stack;
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

  onNext = (success) => {
    const moveToStack = success? 'rightStack' : 'wrongStack';
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
        <this.convertStageToComponents />
    );
  }
}

export default Game;
