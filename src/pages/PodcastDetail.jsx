import { useEffect, useState, useContext } from 'react';
import {  useLocation } from 'react-router-dom';
import { AppContext } from '../context/context';
import apiServices from '../services/api';
import useLocalStorage from '../hooks/localStorage';
import styled from 'styled-components';
import { convertXMLtoJSON } from '../utils/functions';
import Sidebar from '../components/Sidebar';
import BoxEpisodes from '../components/BoxEpisodes';


const PodcastDetail = () => {

    const location = useLocation();
    const { state } = location;
    const id = state.data.id.attributes['im:id'];

    const { setCurrentLocation } = useContext( AppContext );

    const [ infoSidebar, setInfoSidebar ] = useLocalStorage( `infoSidebar${id}`, [] );
    const [ loading, setLoading ] = useState( false );

    
    useEffect(() => {
        if( infoSidebar.length === 0 ) {
            setCurrentLocation( '' );
            getApi();
        }else {
            setCurrentLocation( 'Details' );
        };
    }, [] );

    const getApi = () => {
        setLoading(true);
        apiServices.getPodcastDetail( id )
            .then( ( details ) => {
                apiServices.getPodcastEpisodes( details.results[0].feedUrl )
                .then( ( episode ) => {
                    const obJson = convertXMLtoJSON( episode );
                    const { channel } = obJson.rss;
                    setInfoSidebar({
                        image: channel['itunes:image']['@_href'],
                        title: channel.title,
                        author: channel['itunes:author'],
                        description: channel.description,
                        items: channel.item
                    })
                    setCurrentLocation( 'Details' );
                    setLoading( false );

                }).catch( ( e ) => {
                    setCurrentLocation( 'Details' );
                    console.error( e )
                  });
            })
            .catch( console.error );
    };

    if( loading ) {
        return (<Container data-testid="podcast-detail"></Container>)
    } else {
        return (

            <Container data-testid="podcast-detail">
                <Sidebar info={ infoSidebar }/>
                <BoxEpisodes info={ infoSidebar } id={ id }/>
            </Container>

        );
    };

};

export default PodcastDetail;

const Container = styled.div`
    display: flex;
`;