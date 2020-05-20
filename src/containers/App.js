import React from "react";
import Layout from "./Layout";
// import { Route, Switch } from "react-router-dom";
// import Home from "../components/pages/Home/Home";
// import About from "../components/pages/About/About";
// import UserDetail from "../components/pages/UserDetail/UserDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <div>App: {process.env.GITHUB_CLIENT_ID}</div>
      <div>App: {process.env.G_CLIENT_ID}</div>
      <div>REACT {process.env.REACT_APP_CLIENT_ID}</div>
      <div>New {process.env.REACT_APP_API_KEY}</div>
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/user/:id" exact component={UserDetail} />
      </Switch> */}
    </Layout>
  );
};
export default App;
