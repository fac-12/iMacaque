import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TrialForm from "./components/Binary/Trial_form";
import StartTrialCountdown from "./components/Binary/Start_trial_countdown";
import StartWebcam from "./components/Binary/StartWebcam";
import BinaryPlus from "./components/Binary/Binary_plus";
import ChoicesAppear from "./components/Binary/Choices_appear";

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
          <Route exact path="/binary_plus" component={BinaryPlus} />
          <Route exact path="/choice_appear" component={ChoicesAppear} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
