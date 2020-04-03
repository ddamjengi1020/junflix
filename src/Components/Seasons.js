import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  max-width: 290px;
`;
const SeasonsGrid = styled.div`
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 140px);
  grid-gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 20px;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  ::-webkit-scrollbar-button:horizontal:increment {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border-left: 1px solid black;
  }
  ::-webkit-scrollbar-button {
    display: block;
    width: 25px;
    background-color: #ffffff50;
    transition: all 1s linear;
    &:hover {
      background-color: #ffffff;
    }
  }

  ::-webkit-scrollbar-button:start {
    display: none;
  }
`;

const Title = styled.span`
  margin: 30px 0 15px 0;
  font-weight: 600;
  font-size: 20px;
`;

const Seasons = styled.div`
  position: relative;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SeasonImage = styled.img`
  width: 140px;
  height: 200px;
  border-radius: 5px;
`;

const SeasonNum = styled.span`
  position: absolute;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #00000099;
  border-top-left-radius: 5px;
`;

const Season = ({ seasons }) => (
  <Container>
    <Title>Season</Title>
    <SeasonsGrid columns={seasons.length}>
      {seasons.map(season => (
        <Seasons key={season.id}>
          <SeasonNum>{season.season_number}</SeasonNum>
          <SeasonImage
            src={
              season.poster_path
                ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                : require("../image/no-poster.png")
            }
            alt=""
          />
        </Seasons>
      ))}
    </SeasonsGrid>
  </Container>
);

Season.propTypes = {
  seasons: PropTypes.array.isRequired
};

export default Season;
