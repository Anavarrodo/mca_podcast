import { createContext, useState } from 'react';

const AppContext = createContext();

const ContextProvider = ({ children }) => {

  const [ currentLocation, setCurrentLocation ] = useState('');

  return (

    <AppContext.Provider value={{ currentLocation, setCurrentLocation }}>
      { children }
    </AppContext.Provider>

  );
};

export { ContextProvider, AppContext };