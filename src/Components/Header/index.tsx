import React from "react";
import styles from "../../index.module.scss";

export default function Header() {
  return (
    <div id={styles.header}>
      <div id={styles.siteTitle}>
        <h1 id={styles.title}>MARIEKE KOEKKOEK</h1>
        <h2 id={styles.slogan}>Voor een tweede koekje bij de koffie</h2>
      </div>
      <div id={styles.logoContainer}>
        <img id={styles.logo} src={"voltLogo.png"} />
      </div>
    </div>
  );
}
