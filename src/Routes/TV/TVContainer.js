import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
  state = {
    airingPlaying: null,
    topRating: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: airingPlaying }
      } = await tvApi.airingPlaying();
      const {
        data: { results: topRating }
      } = await tvApi.topRating();
      const {
        data: { results: popular }
      } = await tvApi.popular();
      this.setState({
        airingPlaying,
        topRating,
        popular
      });
    } catch (error) {
      this.setState({
        error: "Can't find TV Shows information"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

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
