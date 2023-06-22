import axios from 'axios';
import { baseUrl, list, detail } from './baseUrl';

const getPodcastList = () => {
    const request = axios.get(`${baseUrl}${list}`);
    return request.then(response => response.data.feed.entry);
}

const getPodcastDetail = (id) => {
    const request = axios.get(`${baseUrl}${detail}?id=${id}`);
    return request.then(response => response.data);
}

export default { getPodcastList, getPodcastDetail };