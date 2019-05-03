import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import levenshtein from '../utils/levenshtein';

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

const CenteredForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpellingTipWrapper = styled.div`
  position: absolute;
  bottom: 100%;
`;

const SpellingTip = ({ children }) => <SpellingTipWrapper />;

const GuessingControls = props => {
  const [guesses, setGuesses] = useState(props.guesses || []);
  const [guess, setGuess] = useState('');
  const [misspell, setMisspell] = useState(false);

  // Clear the misspell flag if the user nulls out their guess
  useEffect(() => {
    if (misspell && !guess)
      setMisspell(false);
  }, [guess])

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
    const accepts = props.data.accepts || [];

    const acceptables = [name, ...accepts].map(a => dumbify(a));

    return acceptables.some(acceptable => input == acceptable);
  };

  const checkSpelling = rawInput => {
    const input = dumbify(rawInput);

    const name = props.data.name;
    const accepts = props.data.accepts || [];

    const acceptables = [name, ...accepts].map(a => dumbify(a));

    return acceptables.some(acceptable => levenshtein(input, acceptable) < 2);
  };

  const onGuess = e => {
    e.preventDefault();

    if (!guess) return;

    setMisspell(false);

    if (validate(guess)) {
      props.onSuccess([...guesses, guess]);
      setGuesses([]);
      setGuess('');
    } else if (checkSpelling(guess)) {
      setMisspell(true);
    } else {
      setGuesses([...guesses, guess]);
      setGuess('');
    }
  };

  const onSkip = e => {
    e.preventDefault();

    props.onSkip(guesses);

    setGuess('');
    setGuesses([]);
  };

  const onGiveUp = e => {
    e.preventDefault();

    props.onGiveUp(guesses);

    setGuess('');
    setGuesses([]);
  };

  return (
    <>
      <div className="ui card centered">
        <div className="content">
          <CenteredForm className="ui form">
            <div className={`ui popup top left tiny ${misspell && 'visible'}`}style={{ top: 'auto', right: 'auto', bottom: '100%' }}>Check your spelling!</div>
            <div className={`field ${misspell && 'error'}`}>
              <input
                type="text"
                placeholder="Enter country name"
                autoFocus
                value={guess}
                onChange={e => setGuess(e.target.value)}
              />
            </div>

            <div className="ui buttons">
              <button className="ui button primary" onClick={onGuess}>
                Guess
              </button>
              <button className="ui button" onClick={onSkip}>
                Skip
              </button>
              <button className="ui button negative" onClick={onGiveUp}>
                Give Up
              </button>
            </div>
          </CenteredForm>
        </div>
        <Guesses guesses={guesses} />
      </div>
    </>
  );
};

export default GuessingControls;
