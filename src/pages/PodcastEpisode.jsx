import { useEffect, useState, useContext } from 'react';
import {  useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../context/context';
import apiServices from '../services/api';
import { convertXMLtoJSON } from '../utils/functions';
import useLocalStorage from '../hooks/localStorage';
import Sidebar from '../components/Sidebar';
import BoxEpisodes from '../components/BoxEpisodes';
import Episode from '../components/Episode';


const PodcastDetail = () => {
    const location = useLocation();
    const { state } = location;
    const {data, item} = state;
    console.log(item)
    console.log(data)

    const { currentLocation, setCurrentLocation } = useContext(AppContext);


    const [ loading, setLoading ] = useState(false);

    useEffect(() =>{
            setCurrentLocation('Episode');
    }, []);

   

    if(loading) {
        return null
    } else {
        return (
            <Container>
                <Sidebar info={ data }/>
               <Episode info={item}/>
                
            </Container>
        )
    }

};

export default PodcastDetail;

const Container = styled.div`
    display: flex;
`;