import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TimeContext from '../context/TimeContext';

const Title = styled.h1`
  font-family: 'Oswald', san-serif;
  text-align: center;
  width: 100%;
`;

const Instructions = styled.h4`
  font-style: italic;
`;

const Stat = styled.span`
  font-style: italic;
  font-size: 1.3em;
`;

const Summary = props => {
  const time = React.useContext(TimeContext);
  return (
    <>
      <div className="ui card centered">
        <div className="content">
          <Title>COMPLETE!</Title>
        </div>
        <div className="content">
          <Instructions>Let's see how you did...</Instructions>
          <div className="ui one column centered grid">
            <div className="row">
              <div className="column middle aligned">Out of {props.total} flags:</div>
            </div>
          </div>
          <div className="ui two column centered divided grid">
            <div className="row">
              <div className="column middle aligned">
                <h4 className="ui icon header">
                  <i className="check icon" />
                  <div className="content">
                    {props.right}
                    <div className="sub header">Correct flags</div>
                  </div>
                </h4>
              </div>

              <div className="column middle aligned">
                <h4 className="ui icon header">
                  <i className="x icon" />
                  <div className="content">
                    {props.wrong}
                    <div className="sub header">Given up flags</div>
                  </div>
                </h4>
              </div>
            </div>
          </div>

          <div className="ui list relaxed">
            <div className="item">
              <i className="large star outline middle aligned icon" />
              <div className="content">
                <div className="header">{props.perfect}</div>
                <div className="description">Correct on the first attempt</div>
              </div>
            </div>
            <div className="item">
              <i className="large crosshairs middle aligned icon" />
              <div className="content">
                <div className="header">{props.avg}</div>
                <div className="description">Average attempts per correct answer</div>
              </div>
            </div>
            <div className="item">
              <i className="large clock outline middle aligned icon" />
              <div className="content">
                <div className="header">{time.value}</div>
                <div className="description">Total time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui card centered">
        <div className="content">
          <Instructions>Time to learn!</Instructions>
          <p>Play again with only the flags you missed:</p>
          <Link to={`/play?stack=${props.stackString}`} className="ui button fluid basic">
            Go!
          </Link>
          <div className="ui horizontal divider">OR</div>
          <p>Save this code to try again later:</p>
          <div className="ui disabled fluid input">
            <input type="text" value={props.stackString} readOnly />
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
