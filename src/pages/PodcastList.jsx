import { useEffect, useState, useContext } from 'react';
import apiServices from '../services/api';
import styled from 'styled-components';
import useLocalStorage from '../hooks/localStorage';
import Card from '../components/Card';
import Searcher from '../components/Searcher';
import AppContext from '../context/context';
import { useNavigate } from 'react-router-dom';

const PodcastList = () => {

    const [podcastsOriginal, setPodcastsOriginal] = useLocalStorage('podcasts', []);
    const [podcastsFilter, setPodcastsFilter] = useState([]);
    const { setCurrentLocation } = useContext(AppContext);
    let navigate = useNavigate();

    useEffect(() => {
        if(podcastsOriginal.length === 0) {getApi();}else {setCurrentLocation('Inicio');}
        setPodcastsFilter(podcastsOriginal);
    }, []);

    const getApi = () => {
        apiServices.getPodcastList()
            .then((podcasts) => {
                setPodcastsOriginal(podcasts);
                setPodcastsFilter(podcasts)
                setCurrentLocation('Inicio');

            })
            .catch( console.error );
    }

    const getFilterPodcats = ( search ) => {
        setPodcastsFilter(search);
    }

    const handleNavigate = (podcast)=> {
        setCurrentLocation('');
        navigate(`/podcast/${podcast.id.attributes['im:id']}/`, {state: {
            data: podcast
        }})
    }

    return ( 
        <Container>
            <BoxSearcher>
                <Searcher         
                    defaultPodcasts={podcastsOriginal}
                    onChange={ getFilterPodcats }
                /> 
            </BoxSearcher>
            <BoxCards>
                {podcastsFilter.map((podcast) => 
                    <Card 
                        key={podcast.id.label}
                        data={podcast}
                        onClick={() => handleNavigate(podcast)}
                    />
                )}
            </BoxCards>
        </Container>

    )
};

export default PodcastList;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const BoxSearcher = styled.div`
    display: flex;
    justify-content: end;
`;

const BoxCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
`;