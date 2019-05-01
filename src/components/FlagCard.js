import React from 'react';
import styled from 'styled-components';

const FlagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 354px;
`;

const FlagCard = ({ url }) => (
  <FlagWrapper>
    <div className="ui card">
      <div className="image">
        <img src={url} />
      </div>
    </div>
  </FlagWrapper>
);

export default FlagCard;