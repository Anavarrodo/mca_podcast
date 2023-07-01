
import { useContext, useEffect } from 'react';
import { AppContext } from '../context/context';
import styled from 'styled-components';

const Episode = ({ info }) => {

    const { setCurrentLocation } = useContext( AppContext );

    useEffect(() => {
        setCurrentLocation('Episode');
    }, [setCurrentLocation]);

    return (

        <Container data-testid='episode'>
            <Title>{ info.title }</Title>
            <Description dangerouslySetInnerHTML={{ __html: info.description }}></Description>
            <Reproductor controls>
                <source src={ info.enclosure['@_url'] } type='audio/mpeg' data-testid='reproductor'/>
                Tu navegador no soporta el elemento de audio.
            </Reproductor>
        </Container>

    );
};

export default Episode;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 68px auto;
    width: 55%;
    border-bottom: 1px solid #D1D7DC;
    border-right: 1px solid #D1D7DC;
    border-left: 1px solid #D1D7DC;
    box-shadow: 0 4px 2px -2px #D1D7DC;
    padding: 10px;
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

const Reproductor = styled.audio`
    width: auto;
    margin-top: 24px;
`;