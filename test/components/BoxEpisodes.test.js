const { render, fireEvent, screen } = require('@testing-library/react');
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router  } from 'react-router-dom';
import { AppContext } from '../../src/context/context';
import BoxEpisodes from '../../src/components/BoxEpisodes';
import { boxEpisodesMock } from './__mocks__';

const id='1535809341';
const setCurrentLocation = jest.fn();
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('test by <BoxEpisodes /> ', () => {
    
    test('renders without error', () => {

        const { getByTestId } = render(  
            <Router>
                <AppContext.Provider value={{ setCurrentLocation }}>
                    <BoxEpisodes info={{ items: [] }} id={id} />
                </AppContext.Provider>
            </Router>
        );

        expect( getByTestId('box-episodes').innerHTML ).toBeTruthy();

    });

    test('handles episode clicks correctly', () => {
      
        render(
          <AppContext.Provider value={{ setCurrentLocation }}>
            <BoxEpisodes 
                info={boxEpisodesMock } 
                id={id} 
            />
          </AppContext.Provider>
        );
      
        fireEvent.click(screen.getByText("'The Show' | Every Single Album: Niall Horan"));
      
        expect(mockNavigate).toHaveBeenCalledWith('/podcast/1535809341/episode/011541a0-11e8-11ee-afbc-1b6aa7ef28c2', {
          state: {
            data: boxEpisodesMock,
            item: boxEpisodesMock.items[0]
          }
        });
    });

    test('shows the correct number of episodes', () => {

        render( 
            <AppContext.Provider value={{ setCurrentLocation }}>
                <BoxEpisodes info={ boxEpisodesMock } id='1628914491' />
            </AppContext.Provider>
        );

        const titleElement = screen.getByText(/Episodes: 2/i);
        expect(titleElement).toBeInTheDocument();
      });
});