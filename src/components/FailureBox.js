import React from 'react';

const FailureBox = props => {

  const onNext = e => {
    e.preventDefault();
    props.onNext();
  };

  return (
    <div className="ui card centered">
      <div className="content">
        <div className="meta">
          The correct answer was...
        </div>
        <span className="header">{props.data.name}</span>
      </div>
      <div className="extra content">
        <button className="ui button" type="button" onClick={onNext} autoFocus>
          Next
        </button>
      </div>
    </div>
  );
};

export default FailureBox;
