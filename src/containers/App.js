import React, { Component } from 'react';
import { shuffle } from 'shuffle-seed';

import FlagCard from '../components/FlagCard';
import GuessingControls from '../components/GuessingControls';

import FLAG_DATA from '../constants/FLAG_DATA';

class App extends Component {
  state = {
    doingStack: this.initializeStack(),
    doneStack: [],
  };
  
  initializeStack(options = {}) {
    let stack = FLAG_DATA;

    // filter regions
    if (options.regions) {
      stack = stack.filter(flag => flag.regions.some(region => options.regions.includes(region)));
    }

    // shuffle using random seed
    const seed = Math.random().toString(36).substring(7);
    stack = shuffle(stack, seed);

    // initialize game things
    stack = stack.map(item => ({
      ...item,
      guesses: [],
    }));

    console.log(stack);
    return stack;
  };

  onSuccess = () => {
    this.setState({
      doneStack: [...this.state.doneStack, this.state.doingStack[0]],
      doingStack: this.state.doingStack.slice(1),
    });
  };

  onFail = () => {};

  onSkip = () => {
    this.setState({
      doingStack: [...this.state.doingStack.slice(1), this.state.doingStack[0]]
    })
  };

  render() {
    return (
      <div>
        <FlagCard url={this.state.doingStack[0].url} />
        <GuessingControls 
          data={this.state.doingStack[0]} 
          onSuccess={this.onSuccess}
          onSkip={this.onSkip}
          onGiveUp={this.onFail}
        />
      </div>
    );
  }
}

export default App;
