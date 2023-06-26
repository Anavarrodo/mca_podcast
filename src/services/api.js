import axios from 'axios';
import { baseUrl, list, detail } from './baseUrl';

const getPodcastList = () => {
    const request = axios.get(`${baseUrl}${list}`);
    return request.then(response => response.data.feed.entry);
}

const getPodcastDetail = (id) => {
    const request = axios.get(`https://cors-anywhere.herokuapp.com/${baseUrl}${detail}?id=${id}`, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Custom-Header': 'Valor personalizado',
        },
      });
    return request.then(response => response.data);
}

const getPodcastEpisodes = (url) => {
    const request = axios.get(`https://cors-anywhere.herokuapp.com/${url}`, {
        // headers: {
        //   'Origin': url,
        // },
      });
    return request.then(response => response.data);
}

export default { getPodcastList, getPodcastDetail, getPodcastEpisodes };