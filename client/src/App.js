import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" compnent={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
