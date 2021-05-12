import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import FeedDetail from "./Pages/FeedDetail/FeedDetail";
import Feed from "./Pages/Feed/Feed";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/:id" component={FeedDetail} />
        </Switch>
      </Router>
    );
  }
}
