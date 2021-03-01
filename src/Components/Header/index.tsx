import React from "react";
import styles from "../../index.module.scss";

export default function Header() {
  return (
    <div id={styles.header}>
      <a href="/">
        <div id={styles.siteTitle}>
          <h1 id={styles.title}>MARIEKE KOEKKOEK</h1>
          <h2 id={styles.slogan}>
            "Nieuwe politiek is niet die van een leider, maar van vele leiders
            samen."
          </h2>
        </div>
      </a>
      <a href="https://www.volteuropa.org/">
        <div id={styles.logoContainer}>
          <img id={styles.logo} src={"voltLogo.png"} />
        </div>
      </a>
    </div>
  );
}
