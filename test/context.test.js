const { render, act  } = require('@testing-library/react');
import '@testing-library/jest-dom/extend-expect';
import { AppContext, ContextProvider } from '../src/context/context';

describe( 'test by Context ', () => {

    test( 'should render children and provide context values', () => {

        const { getByText } = render (
            <ContextProvider>
              <div>Children</div>
            </ContextProvider>
          ); 

          expect(getByText('Children')).toBeInTheDocument();
    });

    test( 'should provide context values', () => {
        let contextValue;

        // Render the ContextProvider component and access the context value using act
        act(() => {
          render(
            <ContextProvider>
              <AppContext.Consumer>
                {value => {
                  contextValue = value;
                  return null;
                }}
              </AppContext.Consumer>
            </ContextProvider>
          );
        });
    
        // Verify the context values
        expect(contextValue.currentLocation).toEqual('');
        expect(typeof contextValue.setCurrentLocation).toBe('function');
    });
});