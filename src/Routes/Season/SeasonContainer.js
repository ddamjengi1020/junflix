import React from "react";
import SeasonPresenter from "./SeasonPresenter";

export default class SeasonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <SeasonPresenter />;
  }
}
