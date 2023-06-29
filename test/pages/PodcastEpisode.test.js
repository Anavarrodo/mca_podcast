import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import PodcastEpisode from '../../src/pages/PodcastEpisode';
import { AppContext } from '../../src/context/context';
import { episodeMock } from '../components/__mocks__';

const setCurrentLocation = jest.fn();

describe( 'PodcastEpisode', () => {

    test( 'renders without error', () => {

        const { getByTestId } = render (
          <MemoryRouter 
            initialEntries={[{ pathname: '/podcast/1311004083/episode/60ebab35-64bc-407b-9473-aff50106363d', 
              state: { 
                data: episodeMock, 
                item: episodeMock 
              } 
            }]}
          >
            <AppContext.Provider value={{ setCurrentLocation }}>
              <PodcastEpisode />
            </AppContext.Provider>
          </MemoryRouter> 
        );
        expect( getByTestId( 'podcast-episode' ) ).toBeInTheDocument();
    });
});