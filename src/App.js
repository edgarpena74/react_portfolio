import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Header/Nav/Nav";
import Portfolio from "./components/Main/Portfolio";
import Biography from "./components/Main/Biography";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Main/Resume/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={Biography} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
