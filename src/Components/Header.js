import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  padding: 0 20px;
  font-weight: 600;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.705);
  box-shadow: 0 4px 10px #3d3d3d;
  z-index: 9;
`;

const List = styled.ul`
  height: 100%;
  width: 300px;
  display: flex;
  justify-content: space-around;
`;
const Shared = styled.div``;
const Item = styled.li`
  height: 100%;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#ffc048" : "transparent")};
  transition: border-bottom 0.3s linear;
  &:hover,
  &:active {
    border-bottom: 5px solid #ffc048;
  }
`;

const Slink = styled(Link)`
  width: 80px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export default withRouter(({ location: { pathname: path } }) => {
  return (
    <Header>
      <List>
        <Item current={path === "/" || path.includes("movie")}>
          <Slink to="/">Movie</Slink>
        </Item>
        <Item current={path === "/tv" || path.includes("tv")}>
          <Slink to="/tv">TV</Slink>
        </Item>
        <Item current={path === "/search"}>
          <Slink to="/search">Search</Slink>
        </Item>
      </List>
    </Header>
  );
});
