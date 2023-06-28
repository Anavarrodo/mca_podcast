const { render, fireEvent, screen } = require('@testing-library/react');
import { BrowserRouter as Router  } from 'react-router-dom';
import { AppContext } from '../../src/context/context';
import BoxEpisodes from '../../src/components/BoxEpisodes';
import '@testing-library/jest-dom/extend-expect';


const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('test by <BoxEpisodes /> ', () => {

    const setCurrentLocation = jest.fn();
    
    test('renders without error', () => {

        const { getByTestId } = render(  
            <Router>
                <AppContext.Provider value={{ setCurrentLocation }}>
                    <BoxEpisodes info={{ items: [] }} id='1535809341' />
                </AppContext.Provider>
            </Router>
        );

        expect( getByTestId('box-episodes').innerHTML ).toBeTruthy();

    });

    test('handles episode clicks correctly', () => {
      
        render(
          <AppContext.Provider value={{ setCurrentLocation }}>
            <BoxEpisodes 
                info={{ items: [{title: "'The Show' | Every Single Album: Niall Horan", pubDate: 'Fri, 23 Jun 2023 17:11:48 -0000', 'itunes:duration': 4561, guid: {'#text': '011541a0-11e8-11ee-afbc-1b6aa7ef28c2'}}] }} 
                id='1535809341' 
            />
          </AppContext.Provider>
        );
      
        fireEvent.click(screen.getByText("'The Show' | Every Single Album: Niall Horan"));
      
        expect(mockNavigate).toHaveBeenCalledWith('/podcast/1535809341/episode/011541a0-11e8-11ee-afbc-1b6aa7ef28c2', {
          state: {
            data: { items: [{title: "'The Show' | Every Single Album: Niall Horan", pubDate: 'Fri, 23 Jun 2023 17:11:48 -0000', 'itunes:duration': 4561, guid: {'#text': '011541a0-11e8-11ee-afbc-1b6aa7ef28c2'}}] },
            item: { title: "'The Show' | Every Single Album: Niall Horan", pubDate: 'Fri, 23 Jun 2023 17:11:48 -0000', 'itunes:duration': 4561, guid: {'#text': '011541a0-11e8-11ee-afbc-1b6aa7ef28c2'}}
          }
        });
    });

    test('shows the correct number of episodes', () => {

        const items = [
          { guid: { '#text': 'f7f26b1e-fb5a-11ed-ac35-03abe2a0348f' }, title: 'Summer Walker Talks Realizing Her Self-Worth, London On Da Track, Lil Meech & More | Caresha Please', pubDate: 'Fri, 26 May 2023 00:27:25 -0000', 'itunes:duration': 4293 },
          { guid: { '#text': '7440bb9e-f5bb-11ed-8816-938a9e7d355c' }, title: 'Blac Chyna Talks Turn-Ons & Offs, Kardashians, Tyga, Spiritual Journey & More | Caresha Please', pubDate: 'Fri, 19 May 2023 00:00:00 -0000', 'itunes:duration': 3300 },
        ];

        render( 
            <AppContext.Provider value={{ setCurrentLocation }}>
                <BoxEpisodes info={{ items }} id='1628914491' />
            </AppContext.Provider>
        );

        const titleElement = screen.getByText(/Episodes: 2/i);
        expect(titleElement).toBeInTheDocument();
      });
});