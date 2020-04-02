import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { movieApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: true
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let data = null;
    try {
      ({ data } = await movieApi.movieCollection(id));
    } catch (error) {
      this.setState({
        error: "Information could not be retrieved"
      });
    } finally {
      this.setState({
        data,
        loading: false
      });
    }
  }

  render() {
    const { data, error, loading } = this.state;
    return <CollectionPresenter data={data} error={error} loading={loading} />;
  }
}
