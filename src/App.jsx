import { useState } from 'react';
import AppRouter from './router/AppRouter';
import Header from './components/Header';
import AppContext from './context/context';

function App () {

  const [currentLocation, setCurrentLocation] = useState('');

  return( 
    <AppContext.Provider value={{ currentLocation, setCurrentLocation }}>
      <Header/>
      <AppRouter/>
    </AppContext.Provider>
  )
  
}

export default App;
