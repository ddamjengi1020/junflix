import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  async componentDidMount() {
    try {
      const {
        data: { results: movieResults }
      } = movieApi.search();
      const {
        data: { results: tvResults }
      } = tvApi.search();
      this.setState({
        movieResults,
        tvResults
      });
    } catch (error) {
      this.setState({
        error: "Can't find searching results"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  componentDidUpdate() {}

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}
