import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 40px;
`;

const TVPresenter = ({ airingPlaying, topRating, popular, error, loading }) => (
  <>
    <Helmet>
      <title>TV show | Junflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {airingPlaying && airingPlaying.length > 0 && (
          <Section title="Airing playing">
            {airingPlaying.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {topRating && topRating.length > 0 && (
          <Section title="Top rating">
            {topRating.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title="Popular">
            {popular.map(show => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.name}
                imgUrl={show.poster_path}
                rating={show.vote_average}
                year={show.first_air_date}
                isMovie={false}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e84118" text={error} />}
      </Container>
    )}
  </>
);
TVPresenter.propTypes = {
  airingPlaying: propTypes.array,
  topRating: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default TVPresenter;
