import { useEffect, useState, useContext, useCallback  } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';
import apiServices from '../services/api';
import useLocalStorage from '../hooks/localStorage';
import styled from 'styled-components';
import Card from '../components/Card';
import Searcher from '../components/Searcher';

const PodcastList = () => {

    let navigate = useNavigate();

    const { setCurrentLocation } = useContext( AppContext );

    const [ podcastsOriginal, setPodcastsOriginal ] = useLocalStorage( 'podcasts', [] );
    const [ podcastsFilter, setPodcastsFilter ] = useState( [] );
    const [ loading, setLoading ] = useState(false);

    const getApi = useCallback(() => {
        apiServices.getPodcastList()
            .then( ( podcasts ) => {
                setPodcastsOriginal( podcasts );
                setPodcastsFilter( podcasts );
                setCurrentLocation( 'List' );
            })
            .catch((error) => {
                console.error(error);
                setLoading(true);
            });
    }, [setCurrentLocation, setPodcastsOriginal]);

    useEffect(() => {
        if( podcastsOriginal.length === 0 && !loading ) {
            getApi();
            setCurrentLocation( '' );
        }else {
            setCurrentLocation( 'List' );
        }

        setPodcastsFilter( podcastsOriginal );
    }, [podcastsOriginal, getApi, setCurrentLocation, loading] );

    const getFilterPodcats = ( search ) => {
        setPodcastsFilter( search );
    };

    const handleNavigate = ( podcast )=> {
        setCurrentLocation( ' ');
        navigate(`/podcast/${ podcast.id.attributes['im:id'] }/`, { state: {
            data: podcast
        }});
    };

    return ( 

        <Container data-testid='podcast-list'>
            <BoxSearcher>
                <Searcher         
                    defaultPodcasts={ podcastsOriginal }
                    onChange={ getFilterPodcats }
                /> 
            </BoxSearcher>
            <BoxCards>
                {podcastsFilter.map( ( podcast ) => 
                    <Card 
                        key={ podcast.id.label }
                        data={ podcast }
                        onClick={ () => handleNavigate( podcast ) }
                    />
                )};
            </BoxCards>
        </Container>

    );
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