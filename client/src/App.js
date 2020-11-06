import Saved from "./containers/Saved/Saved";
import Search from "./containers/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
