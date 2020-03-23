import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
  state = {
    airingPlaying: null,
    topRating: null,
    popular: null,
    error: null,
    loading: true
  };

  render() {
    const { airingPlaying, topRating, popular, error, loading } = this.state;
    return (
      <TVPresenter
        airingPlaying={airingPlaying}
        topRating={topRating}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
