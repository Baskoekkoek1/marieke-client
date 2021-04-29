import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import Loading from "./Components/Loading";
import Login from "./Components/Login";
import { selectToken } from "./store/auth/selectors";
import { getUserWithStoredToken } from "./store/auth/actions";
import AdminNavbar from "./Components/AdminNavbar";
import ChangePassword from "./Components/ChangePassword";

function App() {
  const isLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  });

  const adminNavbar = token && token !== "failed" ? <AdminNavbar /> : null;

  return (
    <div className="App">
      <Header />
      {adminNavbar}
      <Switch>
        <Route exact path="/" component={MainContent} />
        <Route path="/media" component={MediaPage} />
        <Route path="/login" component={Login} />
        <Route path="/changepass" component={ChangePassword} />
      </Switch>
      {isLoading ? <Loading /> : <Footer />}
    </div>
  );
}

export default App;
