import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import MonkeyId from "./components/Binary/Monkey_id";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/monkeyId" component={MonkeyId} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
