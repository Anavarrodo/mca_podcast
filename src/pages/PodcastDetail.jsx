import { useEffect, useState, useContext } from 'react';
import {  useLocation } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../context/context';
import apiServices from '../services/api';
import { convertXMLtoJSON } from '../utils/functions';
import useLocalStorage from '../hooks/localStorage';
import Sidebar from '../components/Sidebar';
import BoxEpisodes from '../components/BoxEpisodes';


const PodcastDetail = () => {
    const location = useLocation();
    const { state } = location;
    const id = state.data.id.attributes['im:id'];

    const { setCurrentLocation } = useContext(AppContext);

    const [ infoSidebar, setInfoSidebar ] = useLocalStorage(`infoSidebar${id}`, []);
    const [ loading, setLoading ] = useState(false);

    useEffect(() =>{
        if(infoSidebar.length === 0) {
            getApi();
        }else {
            setCurrentLocation('Details');
        }
       
    }, []);

    const getApi = () => {
        setLoading(true);
        apiServices.getPodcastDetail(id)
            .then((details) => {
                apiServices.getPodcastEpisodes(details.results[0].feedUrl)
                .then((episodie) => {
                    const obJson = convertXMLtoJSON(episodie);    
                    console.log(obJson)     
                    const { channel } = obJson.rss;
                    setInfoSidebar({
                        image: channel['itunes:image']['@_href'],
                        title: channel.title,
                        author: channel['itunes:author'],
                        description: channel.description,
                        items: channel.item
                    })
                    setLoading(false);

                }).catch( console.error )
            })
            .catch( console.error );
            setCurrentLocation('Details')
    }

    if(loading) {
        return null
    } else {
        return (
            <Container>
                <Sidebar info={ infoSidebar }/>
                <BoxEpisodes info={ infoSidebar.items } id={id}/>
            </Container>
        )
    }

};

export default PodcastDetail;

const Container = styled.div`
    display: flex;
`;