import { useEffect, useState } from 'react';
import apiServices from '../services/api';
import styled from 'styled-components';
import useLocalStorage from '../hooks/localStorage';
import Card from '../components/Card';
import Searcher from '../components/Searcher';

const PodcastList = () => {

    const [podcastsOriginal, setPodcastsOriginal] = useLocalStorage('podcasts', []);
    const [podcastsFilter, setPodcastsFilter] = useState([]);

    useEffect(() => {
        podcastsOriginal.length === 0 && getApi();
        setPodcastsFilter(podcastsOriginal);
    }, []);

    const getApi = () => {
        apiServices.getPodcastList()
            .then((podcasts) => {
                setPodcastsOriginal(podcasts);
                setPodcastsFilter(podcasts)
            })
            .catch( console.error );
    }

    const getFilterPodcats = ( search ) => {
        setPodcastsFilter(search);
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
                        img={podcast['im:image'][2].label}
                        name={podcast['im:name'].label}
                        artist={podcast['im:artist'].label}
                        id={podcast.id.attributes['im:id']}
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
    margin-top: 32px;
`;