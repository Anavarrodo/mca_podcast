import { useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import styled from "styled-components";

const NotFound = () => {
  const { setCurrentLocation } = useContext(AppContext);

  useEffect(() => {
    setCurrentLocation("NoFound");
  }, [setCurrentLocation]);
  return <Message data-testid="not_found">Oops, página no encontrada</Message>;
};

export default NotFound;

const Message = styled.span`
  font-family: Montserrat-Regular;
  padding: 50px;
  display: flex;
`;
