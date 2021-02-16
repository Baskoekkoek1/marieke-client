import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./index.module.scss";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Footer from "./Components/Footer";
import VoltInfo from "./Components/VoltInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <VoltInfo />
      <Footer />
    </div>
  );
}

export default App;
