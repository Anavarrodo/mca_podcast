import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';
import styled from 'styled-components';

const Header = () => {

    let navigate = useNavigate();

    const { currentLocation, setCurrentLocation } = useContext( AppContext );

    const handleClick = () => {
        if( currentLocation !== '' && currentLocation !== 'List' ) {
            navigate( '/' ); 
            setCurrentLocation( '' );
        };
    };

    return (

        <Container>
            <Link onClick={ handleClick }>
                <Title>Podcaster</Title>
            </Link>
        
            {currentLocation === '' && 
                <LoadingContent>
                    <Circle></Circle>
                </LoadingContent>
            }
        </Container>

    );
};

export default Header;

const Container = styled.div`
    height: 50px;
    display: flex;
    cursor: default;
    box-sizing: border-box;
    justify-content: space-between;
    border-bottom: 1px solid #D1D7DC;
`;

const Link = styled.div`
    display: flex;
    cursor: pointer;
`;

const Title = styled.span`
    color: #5E97F6;
    margin: auto;
    font-family: Montserrat-Bold;
    font-size: 20px;
`;

const LoadingContent = styled.div`
    display: flex;
    align-items: center;
`;

const Circle = styled.div`
    background: #5E97F6;
    border-radius: 50%;
    width: 25px;
    height: 25px;
`;