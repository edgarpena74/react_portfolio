import "./App.css";
// import { Route, HashRouter, Switch } from "react-router-dom";
import Nav from "./components/Header/Nav/Nav";
import Portfolio from "./components/Project/Portfolio";
// import Biography from "./components/Project/Biography";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <HashRouter>
    <div className="App">
      <Nav />
      <Portfolio />
      {/* <Switch>
          <Route path="/portfolio#/" component={Portfolio} />
          <Route path="" component={Biography} />
        </Switch> */}
    </div>
    // </HashRouter>
  );
}

export default App;
