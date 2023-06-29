import { useEffect, useContext } from 'react';
import {  useLocation } from 'react-router-dom';
import { AppContext } from '../context/context';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Episode from '../components/Episode';


const PodcastDetail = () => {

    const location = useLocation();
    const { state } = location;
    const { data, item } = state;

    const { setCurrentLocation } = useContext( AppContext );

    useEffect(() =>{
            setCurrentLocation( 'Episode' );
    }, [] );

    return (

        <Container data-testid='podcast-episode'>
            <Sidebar info={ data }/>
            <Episode info={ item }/>
        </Container>

    );
};

export default PodcastDetail;

const Container = styled.div`
    display: flex;
`;