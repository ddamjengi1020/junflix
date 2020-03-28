import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgimage});
  background-size: cover;
  background-position: center center;
  filter: blur(4px);
  opacity: 0.5;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgimage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
    </Container>
  );

DetailPresenter.propTypes = {
  result: propTypes.object,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default DetailPresenter;
