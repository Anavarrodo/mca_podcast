import { useEffect } from 'react';
import apiServices from '../services/api';
import styled from 'styled-components';
import useLocalStorage from '../hooks/localStorage';
import Card from '../components/Card';

const PodcastList = () => {

    const [podcastsOriginal, setPodcastsOriginal] = useLocalStorage('podcasts', []);

    useEffect(() => {
        getApi();
    }, []);

    const getApi = () => {
        apiServices.getPodcastList()
            .then((podcasts) => {
                setPodcastsOriginal(podcasts);
            })
            .catch( () => console.error );
    }

    return ( 
        <Container>
            {podcastsOriginal.map((podcast) => 
                <Card 
                    key={podcast.id.label} 
                    img={podcast['im:image'][2].label}
                    name={podcast['im:name'].label}
                    artist={podcast['im:artist'].label}
                    id={podcast.id.attributes['im:id']}
                />
            )}
        </Container>
    )
};

export default PodcastList;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 75px;
`;