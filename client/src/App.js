import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import TrialForm from "./components/Binary/Trial_form";
import StartTrialCountdown from "./components/Binary/Start_trial_countdown";
import StartWebcam from "./components/Binary/StartWebcam";
import BinaryPlus from "./components/Binary/Binary_plus";
import ChoicesAppear from "./components/Binary/Choices_appear";
import BinaryReward from "./components/Binary/Binary_reward";
import StaticForm from "./components/Static/Static_form";
import StaticTest from "./components/Static/Static_container";
import Reward from "./components/Static/Reward";
import StaticDataContainer from "./components/Static_data/Static_data_container";
import TrialsDataContainer from "./components/Binary_trials_data/Data_container";
import shuffle from "./helpers/shuffle";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
  }

  Assets = [
    {
      letter: "A",
      fractals: require("./assets/fractals/A.jpg"),
      reward: require("./assets/rewards/A.mp4")
    },
    {
      letter: "B",
      fractals: require("./assets/fractals/B.jpg"),
      reward: require("./assets/rewards/B.mp4")
    },
    {
      letter: "C",
      fractals: require("./assets/fractals/C.jpg"),
      reward: require("./assets/rewards/C.mp4")
    },
    {
      letter: "D",
      fractals: require("./assets/fractals/D.jpg"),
      reward: require("./assets/rewards/D.mp4")
    },
    {
      letter: "E",
      fractals: require("./assets/fractals/E.jpg"),
      reward: require("./assets/rewards/E.mp4")
    },
    {
      letter: "F",
      fractals: require("./assets/fractals/F.jpg"),
      reward: require("./assets/rewards/F.mp4")
    },
    {
      letter: "G",
      fractals: require("./assets/fractals/G.jpg"),
      reward: require("./assets/rewards/G.mp4")
    },
    {
      letter: "H",
      fractals: require("./assets/fractals/H.jpg"),
      reward: require("./assets/rewards/H.mp4")
    },
    {
      letter: "I",
      fractals: require("./assets/fractals/I.jpg"),
      reward: require("./assets/rewards/I.mp4")
    }
  ];
  displayedAssets = shuffle(this.Assets);

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
            render={props => (
              <ChoicesAppear
                displayedAssets={this.displayedAssets}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/binary_trial/:trialId/reward/:letter"
            render={props => (
              <BinaryReward displayedAssets={this.displayedAssets} {...props} />
            )}
          />
          <Route exact path="/static_form" component={StaticForm} />
          <Route
            exact
            path="/:monkeyId/static_test"
            render={props => (
              <StaticTest displayedAssets={this.displayedAssets} {...props} />
            )}
          />
          <Route
            exact
            path="/:monkeyId/static_test/reward/:letter/:decisionTime"
            render={props => (
              <Reward displayedAssets={this.displayedAssets} {...props} />
            )}
          />
          <Route
            exact
            path="/all_static_data"
            component={StaticDataContainer}
          />
          <Route
            exact
            path="/all_trials_data"
            component={TrialsDataContainer}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
