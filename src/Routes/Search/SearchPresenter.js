import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Section from "Components/Section";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0 40px;
`;

const Form = styled.form`
  max-width: 350px;
`;

const Input = styled.input`
  width: 100%;
  padding-bottom: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 25px;
  &:active,
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: grey;
  }
`;

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search Movies or TV Shows..."
        value={searchTerm}
        onChange={updateTerm}
      />
    </Form>
    {loading ? (
      <Loader />
    ) : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}
        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(tv => (
              <span key={tv.id}>{tv.name}</span>
            ))}
          </Section>
        )}
        {tvResults &&
          movieResults &&
          tvResults.length === 0 &&
          movieResults.length === 0 && (
            <Message color="#dcdde1" text="Not Found Movie and TV" />
          )}
        {error && <Message color="#e84118" text={error} />}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired,
  updateTerm: propTypes.func.isRequired
};

export default SearchPresenter;
