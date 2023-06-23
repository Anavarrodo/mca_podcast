import {  useLocation } from 'react-router-dom';
const PodcasDetail = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state)
    return <h1>Podcast Detail</h1>

};

export default PodcasDetail;