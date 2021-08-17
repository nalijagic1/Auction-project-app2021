import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import ItemPage from "./SingleProduct";
import LogInBar from "./Components/LogInBar/LogInBar";
import Navigation from "./Components/Navigation/Navigation";
import FooterBar from "./Components/FooterBar/FooterBar";
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

