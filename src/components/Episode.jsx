
import AppContext from '../context/context';
import {useContext, useEffect } from 'react';
import styled from 'styled-components';
import { deleteHTML } from '../utils/functions';
const Episode = ({ info }) => {
    const { setCurrentLocation } = useContext(AppContext);
    useEffect(() => {
        setCurrentLocation('episodio');
    },[]);
    return (
        <Container>
            <Title>{info.title}</Title>
            <Description>{deleteHTML(info.description)}</Description>
            <audio controls>
                <source src={info.enclosure['@_url']} type="audio/mpeg"/>
                Tu navegador no soporta el elemento de audio.
            </audio>
        </Container>
    )
};

export default Episode;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #D1D7DC;
    border-right: 1px solid #D1D7DC;
    border-left: 1px solid #D1D7DC;
    box-shadow: 0 4px 2px -2px #D1D7DC;
    padding: 10px;
    margin: 68px 10px;
    height: fit-content;
`;

const Title = styled.span`  
    font-family: 'Montserrat-Bold';
    font-size: 18px;
`;

const Description = styled.span`
    font-size: 12px;
    margin-top: 8px;
    font-family: Montserrat-Regular;
    font-style: italic;
    line-height: 18px;
`;