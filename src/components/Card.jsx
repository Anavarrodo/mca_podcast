import styled from 'styled-components';

const Card = ({ data, onClick }) => {

    
    return (
        <Box onClick={() => onClick && onClick()}>
            <Image src={ data['im:image'][2].label }/>
            <Info>
                <Name>{data['im:name'].label}</Name>
                <Author>Author: { data['im:artist'].label }</Author>
            </Info>
        </Box>
    );
}

export default Card;

const Box = styled.div`
    cursor: pointer;
    height: 200px;
    border-bottom: 1px solid #D1D7DC;
    border-right: 1px solid #D1D7DC;
    border-left: 1px solid #D1D7DC;
    box-shadow: 0 4px 2px -2px #D1D7DC;
    position: relative;
    width: calc(25% - 20px);
    box-sizing: border-box;
    padding: 10px;
    margin: 68px  10px;
`;

const Image = styled.img`
    border-radius: 50%;
    position: absolute;
    top: 0%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Name = styled.p`
    padding-top: 60px;
    font-family: Montserrat-Bold;
    font-size: 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Author = styled(Name)`
    font-family: Montserrat-Regular;
    font-size: 15px;
    padding-top: 0px;
    margin: 0px;
    color: #929699;
`;