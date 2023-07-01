import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/context";
import styled from "styled-components";

const Sidebar = ({ info }) => {
  const navigate = useNavigate();

  const { setCurrentLocation } = useContext(AppContext);

  const handleClick = () => {
    setCurrentLocation("");
    navigate(-1);
  };

  return (
    <Box data-testid="sidebar">
      <Image
        data-testid="sidebar-image"
        src={info.image}
        onClick={handleClick}
      />
      <Line />
      <Content onClick={handleClick} data-testid="sidebar-content">
        <Title>{info.title}</Title>
        <Author>by {info.author}</Author>
      </Content>
      <Line />
      <ContentDescription>
        <Title>Description: </Title>
        <Description
          dangerouslySetInnerHTML={{ __html: info.description }}
        ></Description>
      </ContentDescription>
    </Box>
  );
};

export default Sidebar;

const Box = styled.div`
  height: fit-content;
  border-bottom: 1px solid #d1d7dc;
  border-right: 1px solid #d1d7dc;
  border-left: 1px solid #d1d7dc;
  box-shadow: 0 4px 14px 0px #d1d7dc;
  position: relative;
  width: calc(30% - 30px);
  box-sizing: border-box;
  padding: 10px;
  margin: 68px 10px;
`;

const Image = styled.img`
  border-radius: 6%;
  position: inherit;
  left: 50%;
  width: 75%;
  transform: translate(-50%, 0%);
  cursor: pointer;
  margin: 20px 0px;
`;

const Line = styled.div`
  border-bottom: 1px solid #d1d7dc;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  cursor: pointer;
`;

const Title = styled.span`
  font-family: Montserrat-Bold;
  font-size: 12px;
`;

const Author = styled.span`
  font-family: Montserrat-Regular;
  font-size: 12px;
  font-style: italic;
`;

const ContentDescription = styled(Content)`
  cursor: default;
`;

const Description = styled.span`
  font-size: 12px;
  margin-top: 8px;
  font-family: Montserrat-Regular;
  font-style: italic;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
