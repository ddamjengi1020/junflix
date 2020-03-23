import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const a = await movieApi.movieDetail();
      const b = await tvApi.tvDetail();
    } catch (error) {
      this.setState({
        error: "Can't find result detail"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
