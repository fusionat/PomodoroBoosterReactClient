import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import App from "./components/app/App";
import PomodoroStoreService from "./services";
import { PomodoroServiceProvider } from "./components/pomodoro-service-context";
import store from "./store";
//import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <PomodoroServiceProvider value={new PomodoroStoreService()}>
      <Router>
        <App />
      </Router>
    </PomodoroServiceProvider>
  </Provider>,
  document.getElementById("root")
);

//serviceWorker.unregister();
