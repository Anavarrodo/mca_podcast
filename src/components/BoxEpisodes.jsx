import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import styled from "styled-components";
import {
  formatDate,
  removeSlashes,
  secondsToMinutes,
} from "../utils/functions";

const BoxEpisodes = ({ info, id }) => {
  const { items } = info;
  const { setCurrentLocation } = useContext(AppContext);

  let navigate = useNavigate();

  const handleNavigate = (episodeId, item) => {
    const epId = removeSlashes(episodeId);
    setCurrentLocation("");
    navigate(`/podcast/${id}/episode/${epId}`, {
      state: {
        data: info,
        item: item,
      },
    });
  };

  return (
    <SectionEpisodes data-testid="box-episodes">
      <BoxTitle>
        <Title>Episodes: {items?.length}</Title>
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
          {items?.length > 0 &&
            items.map((item, i) => {
              return (
                <tr
                  key={`${item.guid["#text"]}${i}`}
                  data-testid="item-episodes"
                >
                  <Cell>
                    <NameEpisode
                      onClick={() =>
                        handleNavigate(item.guid["#text"] ?? item.guid, item)
                      }
                    >
                      {item.title}
                    </NameEpisode>
                  </Cell>
                  <Cell>{formatDate(item.pubDate)}</Cell>
                  <Cell endposition={true.toString()}>
                    {secondsToMinutes(item["itunes:duration"])}
                  </Cell>
                </tr>
              );
            })}
        </tbody>
      </TablaContainer>
    </SectionEpisodes>
  );
};

export default BoxEpisodes;

const SectionEpisodes = styled.div`
  margin: 68px auto;
  width: 55%;
`;
const BoxTitle = styled.div`
  border-bottom: 1px solid #d1d7dc;
  border-right: 1px solid #d1d7dc;
  border-left: 1px solid #d1d7dc;
  box-shadow: 0 4px 14px 0px #d1d7dc;
  padding: 12px;
`;

const Title = styled.span`
  font-family: Montserrat-Bold;
  font-size: 22px;
`;

const TablaContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-bottom: 1px solid #d1d7dc;
  border-right: 1px solid #d1d7dc;
  border-left: 1px solid #d1d7dc;
  box-shadow: 0 4px 14px 0px #d1d7dc;
  margin-top: 24px;
  padding: 12px;
`;

const Header = styled.th`
  padding: 10px;
  border-bottom: 1px solid #d1d7dc;
  text-align: inherit;
  font-family: Montserrat-Bold;
  font-size: 14px;
`;

const Cell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #d1d7dc;
  font-family: Montserrat-Regular;
  font-size: 14px;
  ${({ endposition }) => endposition && "text-align: end;"};
`;

const NameEpisode = styled.div`
  cursor: pointer;
  color: #5e97f6;
`;
