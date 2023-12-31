import styled from "styled-components";

const Card = ({ data, onClick }) => {
  return (
    <Box onClick={() => onClick && onClick()} data-testid="card">
      <Image src={data["im:image"][2].label} />
      <Info>
        <Name>{data["im:name"].label}</Name>
        <Author>Author: {data["im:artist"].label}</Author>
      </Info>
    </Box>
  );
};

export default Card;

const Box = styled.div`
  cursor: pointer;
  height: 200px;
  border-bottom: 1px solid #d1d7dc;
  border-right: 1px solid #d1d7dc;
  border-left: 1px solid #d1d7dc;
  box-shadow: 0 4px 2px -2px #d1d7dc;
  position: relative;
  width: calc(25% - 30px);
  box-sizing: border-box;
  padding: 10px;
  margin: 68px 10px;
`;

const Image = styled.img`
  border-radius: 50%;
  position: absolute;
  top: 0%;
  left: 50%;
  width: 40%;
  transform: translate(-50%, -50%);
  z-index: -1;
  @media screen and (min-width: 2000px) {
    width: 30%;
  }
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
