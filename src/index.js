import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import GithubState from "./contexts/github/GithubState";
const appMain = ( // <React.StrictMode>
  <GithubState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GithubState>
);
// </React.StrictMode>

ReactDOM.render(appMain, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
