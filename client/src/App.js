import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Static from "./components/Landing/Static";
import Binary from "./components/Landing/Binary";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/monkeyId" component={Static} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
