import React from "react";
import styles from "../../index.module.scss";

export default function MainContent() {
  return (
    <div id={styles.mainContent}>
      <img id={styles.profilePic} src={"marieke_profilePic.jpg"} />
      <h1 id={styles.mainContentTitle}>Ik ben Marieke Koekkoek</h1>
      <div id={styles.contentContainer}>
        <p className={styles.mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>
  );
}
