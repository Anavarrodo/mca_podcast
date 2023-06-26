import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';
import apiServices from '../services/api';
import Sidebar from '../components/Sidebar';
import { convertXMLtoJSON } from '../utils/functions';

const PodcasDetail = () => {
    const location = useLocation();
    const { state } = location;
    const id = state.data.id.attributes['im:id'];

    const [ infoSidebar, setInfoSidebar ] = useState([]);

    useEffect(() =>{
        getApi();
    }, []);

    const getApi = () => {
        apiServices.getPodcastDetail(id)
            .then((details) => {
                console.log(details)
                apiServices.getPodcastEpisodes(details.results[0].feedUrl)
                .then((episodie) => {
                    console.log(episodie)
                    const obJson = convertXMLtoJSON(episodie);         
                    console.log(obJson)
                    const { channel } = obJson.rss;
                    setInfoSidebar({
                        image: channel['itunes:image']['@_href'],
                        title: channel.title,
                        author: channel['itunes:author'],
                        description: channel.description
                    })
    })
            })
            .catch( console.error );
    }
    return (<><h1>Podcast Detail</h1><Sidebar info={ infoSidebar }/></>)

};

export default PodcasDetail;