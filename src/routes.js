import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import Nav from "./components/Navigation";

export default () => (
  <Router>
    <Nav fixed />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
