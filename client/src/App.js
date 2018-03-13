import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TrialForm from "./components/Binary/Trial_form";
import StartTrialCountdown from "./components/Binary/Start_trial_countdown";
import BinaryTrial from "./components/Binary/Binary_trial";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/trial_form" component={TrialForm} />
          <Route
            exact
            path="/trial_countdown"
            component={StartTrialCountdown}
          />
          <Route exact path="/binary_trial" component={BinaryTrial} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
