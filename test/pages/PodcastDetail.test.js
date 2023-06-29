import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import PodcastDetail from '../../src/pages/PodcastDetail';
import { AppContext } from '../../src/context/context';

const setCurrentLocation = jest.fn();

describe( 'PodcastDetail', () => {
    
    test( 'renders PodcastDetail component', () => {
      const stateData = {
        id: { attributes: { 'im:id': '1311004083' } }
      };
    
      const { getByTestId } = render (
        <MemoryRouter initialEntries={[{ pathname: '/podcast/', state: { data: stateData } }]}>
          <AppContext.Provider value={{ setCurrentLocation }}>
            <PodcastDetail />
          </AppContext.Provider>
        </MemoryRouter>
      );
    
      expect( getByTestId( 'podcast-detail' ) ).toBeInTheDocument();
    });
});