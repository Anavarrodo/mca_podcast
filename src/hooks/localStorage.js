import { useState } from 'react';

const useLocalStorage = ( keyName, defaultValue ) => {

  // Obtiene la fecha y hora actual
  const currentTime = new Date().getTime();
  // Calcula la fecha y hora de expiración (24 horas después)
  const expirationTime = currentTime + 24 * 60 * 60 * 1000;

  const [storedValue, setStoredValue] = useState(() => {

    try {
      const value = localStorage.getItem( keyName );
      const storedExpirationTime = localStorage.getItem( 'expirationTime' );
      if ( storedExpirationTime && currentTime > storedExpirationTime ) {
        // La información ha expirado
        localStorage.clear();
        location.reload();
      }
      if ( value ) {
        return JSON.parse( value );
      } else {
        localStorage.setItem( keyName, JSON.stringify( defaultValue ) );
        return defaultValue;
      }
    } catch ( err ) {
      return defaultValue;
    }

  });

  const setValue = ( newValue ) => {
    try {
      localStorage.setItem( keyName, JSON.stringify( newValue ) );
      localStorage.setItem( 'expirationTime', expirationTime );
    } catch ( err ) {}
    setStoredValue( newValue) ;
  };

  return [ storedValue, setValue ];
};

export default useLocalStorage;
