import React from 'react';
import styled from 'styled-components';

const SuccessBox = props => {

  const getOrdinal = n => {
    const s = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  const onNext = e => {
    e.preventDefault();
    props.onNext();
  };

  return (
    <div className="ui card centered">
      <div className="content">
        <span className="header">Correct!</span>
        <div className="description">
            You got {props.data.name} correct on your {getOrdinal(props.data.guesses.length + 1)} try.
        </div>

      </div>
      <div className="extra content">
      <button className="ui button" type="button" onClick={onNext} autoFocus>
          Next
        </button>
      </div>
    </div>
  );
};

export default SuccessBox;
