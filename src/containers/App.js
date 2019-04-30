import React, { useState } from 'react';

import FlagCard from '../components/FlagCard';

import FLAG_DATA from '../constants/FLAG_DATA';

const App = () => {

  const [flagIndex, setFlagIndex] = useState(0); 
  

  const initializeStack = (options) => {
    const flags = FLAG_DATA;
    if (options.regions) {
      flags = flags.filter(flag => flag.regions.some(region => options.regions.includes(region)));
    }

    return flags;
  }

  const onSuccess = () => {
    setFlagIndex(flagIndex + 1);
  }

  const onFail = () => {

  }

  const onSkip = () => {

  }

  return (
    <div>
      <FlagCard 
        data={FLAG_DATA[flagIndex]}
        onSuccess={onSuccess}
      />
    </div>
  );
};

export default App;
