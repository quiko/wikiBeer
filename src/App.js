import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Nav from "./Components/Nav/index";
import Footer from "./Components/Footer/index";
import BeerTable from "./Components/BeerTable/index";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Container
          maxWidth="md"
          component="main"
          style={{ marginTop: "15%", marginBottom: "15%" }}
        >
          <Switch>
            <Route exact path="/" component={BeerTable} />
          </Switch>
        </Container>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
