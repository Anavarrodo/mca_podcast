const { render } = require('@testing-library/react');
import '@testing-library/jest-dom/extend-expect';
import AppRouter from '../../src/router/AppRouter';
import { MemoryRouter  } from 'react-router-dom';
import { AppContext } from '../../src/context/context';

const setCurrentLocation = jest.fn();

describe( 'test by <AppRouter /> ', () => {

    test('route / renders PodcastList', () => {

        const { getByTestId } = render (
            <MemoryRouter initialEntries={['/']}>
                <AppContext.Provider value={{ setCurrentLocation }}>
                    <AppRouter />
                </AppContext.Provider>
            </MemoryRouter>
        );
      
        expect( getByTestId('podcast-list') ).toBeInTheDocument();
      });
});