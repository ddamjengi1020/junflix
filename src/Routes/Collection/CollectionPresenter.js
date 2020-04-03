import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "Components/Loader";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgimage});
  opacity: 0.5;
  filter: blur(3px);
`;
const DataContainer = styled.div`
  position: relative;
  padding: 40px;
`;

const MainTitle = styled.span`
  font-size: 40px;
  font-weight: 700;
  color: white;
  display: block;
  margin-bottom: 30px;
`;

const Grid = styled.span`
  width: 90%;
  left: 0;
  right: 0;
  margin: auto;
  display: grid;
  padding-bottom: 20px;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 20px;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    border-top-left-radius: 45%;
    border-bottom-left-radius: 45%;
  }
  ::-webkit-scrollbar-button:horizontal:increment {
    border-top-right-radius: 45%;
    border-bottom-right-radius: 45%;
    border-left: 1px solid black;
  }
  ::-webkit-scrollbar-button {
    display: block;
    width: 30px;
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

const PartImage = styled.img`
  border-radius: 5px;
  width: 280px;
  transition: opacity 0.3s linear;
`;

const PartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${PartImage} {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const PartTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
`;

const CollectionPresenter = ({ data, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgimage={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
      ></Backdrop>
      <DataContainer>
        <MainTitle>{data.name}</MainTitle>
        <Grid columns={data.parts ? data.parts.length : null}>
          {data.parts
            ? data.parts.map(part => (
                <Link to={`/movie/${part.id}`} key={part.id}>
                  <PartContainer>
                    <PartImage
                      src={`https://image.tmdb.org/t/p/original${part.poster_path}`}
                      alt=""
                    />
                    <PartTitle>{part.original_title}</PartTitle>
                  </PartContainer>
                </Link>
              ))
            : null}
        </Grid>
      </DataContainer>
    </Container>
  );

CollectionPresenter.propTypes = {
  data: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default CollectionPresenter;
