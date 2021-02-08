import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./index.module.scss";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img id={styles.profilePic} src={"marieke_profilePic.jpg"} />
    </div>
  );
}

export default App;
