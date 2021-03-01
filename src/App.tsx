import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./index.module.scss";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import VoltInfo from "./Components/VoltInfo";
import { Route, Switch } from "react-router-dom";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/over_mij" component={About} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
