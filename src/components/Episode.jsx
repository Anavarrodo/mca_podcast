
import AppContext from '../context/context';
import {useContext, useEffect } from 'react';
const Episode = () => {
    const { setCurrentLocation } = useContext(AppContext);
    useEffect(() => {
        setCurrentLocation('episodio');
    },[])
    return <h1>Episodio</h1>
};

export default Episode;