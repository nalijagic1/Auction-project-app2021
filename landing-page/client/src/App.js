import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import ItemPage from "./ItemPage";
import LogInBar from "./Components/LogInBar";
import Navigation from "./Components/Navigation";
import FooterBar from "./Components/FooterBar";
function App() {
  return(
    <div>
      <LogInBar/>
      <Navigation/>
     <Router>
        <Switch>
          <Route path="/" exact component={() => <LandingPage />} />
          <Route path="/item" exact component={() => <ItemPage />} />
        </Switch>
      </Router>
      <footer>
        <FooterBar/>
      </footer>

</div>
  );
}

export default App;

