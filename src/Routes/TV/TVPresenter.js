import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 40px;
`;

const Poster = styled.img`
  width: 150px;
`;

const TVPresenter = ({ airingPlaying, topRating, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {airingPlaying && airingPlaying.length > 0 && (
        <Section title="Airing playing">
          {airingPlaying.map(show => (
            <span key={show.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
                alt=""
              />
              {show.name}
            </span>
          ))}
        </Section>
      )}
      {topRating && topRating.length > 0 && (
        <Section title="Top rating">
          {topRating.map(show => (
            <span key={show.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
                alt=""
              />
              {show.name}
            </span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(show => (
            <span key={show.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${show.poster_path}`}
                alt=""
              />
              {show.name}
            </span>
          ))}
        </Section>
      )}
      {error && <Message color="#e84118" text={error} />}
    </Container>
  );

TVPresenter.propTypes = {
  airingPlaying: propTypes.array,
  topRating: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default TVPresenter;
