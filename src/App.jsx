import AppRouter from './router/AppRouter';
import { ContextProvider } from './context/context';
import Header from './components/Header';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

function App () {
  const shouldForwardProp = (prop) => isPropValid(prop);
  return ( 

    <ContextProvider >
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        <Header/>
        <AppRouter/>
      </StyleSheetManager>
    </ContextProvider>

  );
};

export default App;