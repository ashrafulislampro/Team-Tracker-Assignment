import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import TeamsDetails from "./Components/TeamsDetails/TeamsDetails";
import NoMatch from "./NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/teamDetails/:idLeague">
          <TeamsDetails />
        </Route>
        <Route>
          <SocialMedia/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
