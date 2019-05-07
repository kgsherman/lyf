import React, { useState, createContext } from 'react';

const TimeContext = createContext('00:00');

export const TimeProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    const state = { value, setValue };
    return <TimeContext.Provider value={state}>{children}</TimeContext.Provider>
}

export default TimeContext;