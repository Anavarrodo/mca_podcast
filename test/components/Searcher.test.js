const { render, fireEvent } = require('@testing-library/react');
import '@testing-library/jest-dom/extend-expect';
import Searcher from '../../src/components/Searcher';
import { searcherMock } from './__mocks__';

describe( 'test by <Searcher /> ', () => {

    test( 'renders without error', () => {

        const { getByTestId } = render (  
            <Searcher 
                defaultPodcasts={ Array(100) } 
                onChange={ () => {} } 
            />
        );

        expect( getByTestId( 'searcher' ).innerHTML ).toBeTruthy();
    });

    test( 'display of the number of results', () => {
        const { getByTestId } = render (
            <Searcher 
                defaultPodcasts={ Array(58) } 
                onChange={ () => {} } 
            />);

        expect( getByTestId( 'number-element' ) ).toHaveTextContent( 58 );
    });

    test('search', () => {
        const onChangeMock = jest.fn();
        const { getByPlaceholderText } = render (
            <Searcher 
                defaultPodcasts={ searcherMock } 
                onChange={ onChangeMock } 
            />
        );

        fireEvent.change( getByPlaceholderText( 'Filter podcasts' ), { target: { value: 'Rolling Sto' } });
      
        expect( onChangeMock ).toHaveBeenCalledTimes(1);
        expect( onChangeMock).toHaveBeenCalledWith([
            {"im:artist": { label: "Rolling Stone | Cumulus Podcast Network" }, title: { label: "Rolling Stone Music Now - Rolling Stone | Cumulus Podcast Network"}},
        ]);
      });
});