import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TrialForm from "./components/Binary/Trial_form";
import StartTrialCountdown from "./components/Binary/Start_trial_countdown";
import StartWebcam from "./components/Binary/StartWebcam";

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
          <Route exact path="/start_webcam" component={StartWebcam} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
