import React from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Movie from "Routes/Movie";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import Season from "Routes/Season";
import Collection from "Routes/Collection";
import Header from "Components/Header";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Movie} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/tv/:id" component={Detail} />
        <Route path="/season/:id" component={Season} />
        <Route path="/collection/:id" component={Collection} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
