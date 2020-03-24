// import React from "react";
import propTypes from "prop-types";
// import styled from "styled-components";
// import Loader from "../../Components/Loader";

const SearchPresenter = ({
  movieResults,
  tvResults,
  searchTerm,
  error,
  loading,
  handleSubmit
}) => null;

SearchPresenter.propTypes = {
  movieResults: propTypes.array,
  tvResults: propTypes.array,
  searchTerm: propTypes.string,
  error: propTypes.string,
  loading: propTypes.bool.isRequired,
  handleSubmit: propTypes.func.isRequired
};

export default SearchPresenter;
