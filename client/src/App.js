import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TrialForm from "./components/Binary/Trial_form";
import StartTrialCountdown from "./components/Binary/Start_trial_countdown";
import StartWebcam from "./components/Binary/StartWebcam";
import BinaryPlus from "./components/Binary/Binary_plus";
import ChoicesAppear from "./components/Binary/Choices_appear";
import StaticForm from "./components/Static/Static_form";
import StaticTest from "./components/Static/Static_container";
import Reward from "./components/Static/Reward";
import StaticDataContainer from "./components/Static_data/Static_data_container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/trial_form" component={TrialForm} />
          <Route
            exact
            path="/trial_countdown/:trialId"
            component={StartTrialCountdown}
          />
          <Route exact path="/start_webcam/:trialId" component={StartWebcam} />
          <Route exact path="/binary_plus/:trialId" component={BinaryPlus} />
          <Route
            exact
            path="/choice_appear/:trialId"
            component={ChoicesAppear}
          />
          <Route exact path="/static_form" component={StaticForm} />
          <Route exact path="/:monkeyId/static_test" component={StaticTest} />
          <Route
            exact
            path="/:monkeyId/static_test/reward/:letter"
            component={Reward}
          />
          <Route
            exact
            path="/all_static_data"
            component={StaticDataContainer}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
