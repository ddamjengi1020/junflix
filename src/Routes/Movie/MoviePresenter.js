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

const MoviePresenter = ({ nowPlaying, upcoming, popular, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <span key={movie.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </span>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <span key={movie.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Up Coming">
          {upcoming.map(movie => (
            <span key={movie.id}>
              <Poster
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt=""
              />
              {movie.title}
            </span>
          ))}
        </Section>
      )}
      {error && <Message color="#e84118" text={error} />}
    </Container>
  );

MoviePresenter.propTypes = {
  nowPlaying: propTypes.array,
  upcoming: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default MoviePresenter;
