import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./index.module.scss";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import VoltInfo from "./Components/VoltInfo";
import { Route, Switch } from "react-router-dom";
import About from "./Components/MediaPage";
import MediaPage from "./Components/MediaPage";
import { useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import Loading from "./Components/Loading";

function App() {
  const isLoading = useSelector(selectAppLoading);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/media" component={MediaPage} />
      </Switch>
      {isLoading ? <Loading /> : <Footer />}
    </div>
  );
}

export default App;
