import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Searcher = ({ defaultPodcasts, onChange }) => {
    
    const [ numberLength, setNumberLength ] = useState();

    useEffect(() => {

        setNumberLength( defaultPodcasts.length );

    }, [defaultPodcasts.length] );

    const filterBySearch = ( searchedWord ) => {
        const filteredPodcasts = defaultPodcasts.filter(( podcast ) =>
            podcast.title.label.toLowerCase().includes( searchedWord ) ||
            podcast['im:artist'].label.toLowerCase().includes( searchedWord )
        );
    
        if ( filteredPodcasts.length !== 0 ) {
            onChange( filteredPodcasts );
            setNumberLength( filteredPodcasts.length );
        } else {
            setNumberLength(0);
            onChange( [] );
        };
      };

    return (

        <Container>
            <BoxLength>
                <Number>{ numberLength }</Number>
            </BoxLength>
            <SearchBox
                placeholder="Filter podcasts"
                onChange={ (e) => filterBySearch( e.target.value.toLowerCase() ) }
            />
        </Container>
        
    );
};

export default Searcher;

const Container = styled.div`
    display: flex;
    margin-top: 32px;
`;
const BoxLength = styled.div`
    background: lightblue;
    border-radius: 30%;
    width: 50px;
    height: 25px;
    margin-right: 20px;
    display: flex;
    background: #5E97F6;
`;

const Number = styled.span`
    margin: auto;
    font-family: Montserrat-Bold;
    color: #fefefe;
`;

const SearchBox = styled.input`
    border: 1px solid #D1D7DC;
    border-radius: 3px;
    font-family: Montserrat-Regular;
    &:focus {
        outline: none;
    }
`;