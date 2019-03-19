import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import React from "react";
import App from "../App";
import NotFound from "./NotFound";
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default Routes;
