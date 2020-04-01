import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { movieApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      loading: false
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
        error: "Can't bring the data"
      });
    } finally {
      this.setState({
        data,
        loading: true
      });
    }
  }

  render() {
    console.log(this.state.data);
    return <CollectionPresenter />;
  }
}
