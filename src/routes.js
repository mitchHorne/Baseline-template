import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/home";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
);
