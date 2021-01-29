import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Navigation";
import Home from "./containers/home";

export default () => (
  <Router>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
