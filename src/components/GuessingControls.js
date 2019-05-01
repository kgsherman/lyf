import React, { useState } from 'react';
import styled from 'styled-components';

const Guess = ({ guess }) => (
  <div className="item">
    <i class="close icon middle aligned" />
    <div class="content">{guess}</div>
  </div>
);

const Guesses = ({ guesses }) => {
  if (guesses.length == 0) return null;

  return (
    <div class="extra content">
      <div class="ui divided list">
        {guesses.map(guess => (
          <Guess guess={guess} />
        ))}
      </div>
    </div>
  );
};

const GuessingControls = props => {
  const [guesses, setGuesses] = useState([]);
  const [guess, setGuess] = useState('');

  const dumbify = input => {
    const output = input
      .toLowerCase()
      .replace(/\b(the|and|of')\b/gi, '')
      .replace(/\s\s+/gi, ' ')
      .trim();
    return output;
  };

  const validate = rawInput => {
    const input = dumbify(rawInput);

    const name = props.data.name;
    const accepts = props.data.acceptable || [];

    const acceptables = [name, ...accepts].map(a => dumbify(a));

    return acceptables.some(acceptable => input == acceptable);
  };

  const onGuess = e => {
    e.preventDefault();

    if (!guess) return;

    if (validate(guess)) {
      props.onSuccess();
      setGuesses([]);
    } else {
      setGuesses([...guesses, guess]);
    }
    setGuess('');
  };

  const onSkip = e => {
    e.preventDefault();

    props.onSkip();
  };

  const onGiveUp = e => {
    e.preventDefault();

    props.onGiveUp();
  };

  const CenteredForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  return (
    <div className="ui card">
      <div class="content">
        <CenteredForm className="ui form">
          <div class="field">
            <input
              type="text"
              placeholder="Enter country name"
              value={guess}
              onChange={e => setGuess(e.target.value)}
            />
          </div>
          <div class="ui buttons">
            <button class="ui button primary" onClick={onGuess}>
              Guess
            </button>
            <button class="ui button" onClick={onSkip}>
              Skip
            </button>
            <button class="ui button negative" onClick={onGiveUp}>
              Give Up
            </button>
          </div>
        </CenteredForm>
      </div>
      <Guesses guesses={guesses} />
    </div>
  );
};

export default GuessingControls;
