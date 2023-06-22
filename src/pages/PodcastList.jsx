import { useEffect } from 'react';
import apiServices from '../services/api';
import useLocalStorage from '../hooks/localStorage';

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

    return <h1>Podcast List</h1>
    
};

export default PodcastList;