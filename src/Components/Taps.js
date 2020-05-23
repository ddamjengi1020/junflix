import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import { MovieVideos, MovieCompanies, MovieCountries } from "./TapData";

const TapsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 290px;
`;

const TapsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  height: 30px;
`;

const TapBtn = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.focus ? "white" : "#00000090")};
  color: ${(props) => (props.focus ? "black" : "white")};
  &:hover {
    background-color: white;
    color: black;
  }
  font-weight: 500;
  border-radius: 5px;
`;

const Taps = ({ result, isMovie, location: { pathname: path } }) => {
  return (
    <TapsContainer>
      <TapsGrid>
        <TapBtn
          id={"jsInitClick"}
          to={`/${isMovie ? "movie" : "tv"}/${result.id}/videos`}
          focus={path.includes("videos") ? 1 : 0}
        >
          Videos
        </TapBtn>
        <TapBtn
          to={`/${isMovie ? "movie" : "tv"}/${result.id}/companies`}
          focus={path.includes("companies") ? 1 : 0}
        >
          Companies
        </TapBtn>
        <TapBtn
          to={`/${isMovie ? "movie" : "tv"}/${result.id}/countries`}
          focus={path.includes("countries") ? 1 : 0}
        >
          Countries
        </TapBtn>
      </TapsGrid>
      <Route
        path={`/${isMovie ? "movie" : "tv"}/:id/videos`}
        component={MovieVideos}
      />
      <Route
        path={`/${isMovie ? "movie" : "tv"}/:id/companies`}
        component={MovieCompanies}
      />
      <Route
        path={`/${isMovie ? "movie" : "tv"}/:id/countries`}
        component={MovieCountries}
      />
    </TapsContainer>
  );
};

export default withRouter(Taps);
