import { useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import apiServices from '../services/api';
import { XMLParser } from 'fast-xml-parser';

const PodcasDetail = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state)
    const id = state.data.id.attributes['im:id'];
    console.log(id);


    useEffect(() =>{
        getApi();
    }, []);

    const getApi = () => {
        apiServices.getPodcastDetail(id)
            .then((details) => {
                console.log(details);
                apiServices.getFeedPodcast(details.results[0].feedUrl)
                .then((episodio) => {
                    // Opciones para el parser
                    let options = {
                        attributeNamePrefix: "@_",
                        attrNodeName: "attr", //default is 'false'
                        textNodeName : "#text",
                        ignoreAttributes : false,
                        ignoreNameSpace : false,
                        allowBooleanAttributes : false,
                        parseNodeValue : true,
                        parseAttributeValue : false,
                        trimValues: true,
                        cdataTagName: "__cdata", //default is 'false'
                        cdataPositionChar: "\\c",
                        parseTrueNumberOnly: false,
                        arrayMode: false, //"strict"
                    };
                    
                    const parser = new XMLParser(options);
                    let jObj = parser.parse(episodio);
                    console.log(jObj)
    })
            })
            .catch( console.error );
    }
    return <h1>Podcast Detail</h1>

};

export default PodcasDetail;