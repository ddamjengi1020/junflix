import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const TVPresenter = ({ airingPlaying, topRating, popular, error, loading }) =>
  null;

TVPresenter.propTypes = {
  airingPlaying: propTypes.array,
  topRating: propTypes.array,
  popular: propTypes.array,
  error: propTypes.string,
  loading: propTypes.bool.isRequired
};

export default TVPresenter;
