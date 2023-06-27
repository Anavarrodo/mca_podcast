import { useContext } from 'react';
import styled from 'styled-components';
import { formatDate } from '../utils/functions';
import AppContext from '../context/context';
import { useNavigate } from 'react-router-dom';

const BoxEpisodes = ({ info, id }) => {
    
    const { setCurrentLocation } = useContext(AppContext);
    let navigate = useNavigate()
    const handleNavigate = (episodeId) => {
        setCurrentLocation('');
        navigate(`/podcast/${id}/episode/${episodeId}`)
    }
    return (
        <SectionEpisodes>
            <BoxTitle>
                <Title>Episodes: {info?.length}</Title>
            </BoxTitle>
            <TablaContainer>
                <thead>
                    <tr>
                        <Header>Title</Header>
                        <Header>Date</Header>
                        <Header>Duration</Header>
                    </tr>
                </thead>
                <tbody>
                    {info?.length > 0 && info.map((item) => 
                        <tr key={item.guid['#text']}>
                            <Cell>
                                <NameEpisode onClick={ () => handleNavigate(item.guid['#text']) }>{item.title}</NameEpisode>
                            </Cell>
                            <Cell>{formatDate(item.pubDate)}</Cell>
                            <Cell>{item['itunes:duration']}</Cell>
                        </tr>
                    )}
                </tbody>
            </TablaContainer>
        </SectionEpisodes>
    )
}

export default BoxEpisodes;

const SectionEpisodes = styled.div`    
    padding: 10px;
    margin: 68px auto;
    width: 55%;
`;
const BoxTitle = styled.div`
    border-bottom: 1px solid #D1D7DC;
    border-right: 1px solid #D1D7DC;
    border-left: 1px solid #D1D7DC;
    box-shadow: 0 4px 2px -2px #D1D7DC;
    padding: 12px;
`;

const Title = styled.span`
    font-family: Montserrat-Bold;
    font-size: 22px;
`;

const TablaContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-bottom: 1px solid #D1D7DC;
    border-right: 1px solid #D1D7DC;
    border-left: 1px solid #D1D7DC;
    box-shadow: 0 4px 2px -2px #D1D7DC;
    margin-top: 24px;
    padding: 12px;
`;

const Header = styled.th`
    padding: 10px;
    border-bottom:1px solid #D1D7DC;
    text-align: inherit;
    font-family: Montserrat-Bold;
    font-size: 14px;
`;

const Cell = styled.td`
    padding: 10px;
    border-bottom:1px solid #D1D7DC;
    font-family: Montserrat-Regular;
    font-size: 14px;
`;

const NameEpisode = styled.div`
    cursor: pointer;
    color: blue;
`;