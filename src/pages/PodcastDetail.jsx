import { useEffect, useState, useContext } from 'react';
import {  useLocation } from 'react-router-dom';
import AppContext from '../context/context';
import apiServices from '../services/api';
import { convertXMLtoJSON } from '../utils/functions';
import useLocalStorage from '../hooks/localStorage';
import Sidebar from '../components/Sidebar';


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
                    const { channel } = obJson.rss;
                    setInfoSidebar({
                        image: channel['itunes:image']['@_href'],
                        title: channel.title,
                        author: channel['itunes:author'],
                        description: channel.description
                    })
                    setCurrentLocation('Details');
                    setLoading(false);

                })
            })
            .catch( console.error );
    }

    if(loading) {
        return null
    } else {
        return (
            <>
                <Sidebar info={ infoSidebar }/>
            </>
        )
    }

};

export default PodcastDetail;