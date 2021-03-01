import React from "react";
import styles from "../../index.module.scss";

export default function VoltInfo() {
  return (
    <div id={styles.voltInfo}>
      <div id={styles.voltContainer}>
        <div id={styles.voltTitleContainer}>
          <h1 id={styles.voltTitle}>Over Volt</h1>
        </div>
        <p id={styles.voltInfoText}>
          Volt is een pan-Europese politieke beweging, gericht op het veranderen
          van de manier waarop politiek wordt bedreven. Wij geloven dat het
          nodig is om intensiever samen te werken op Europees niveau om de
          uitdagingen van onze tijd het hoofd te bieden. Uitdagingen zoals
          klimaatveranderingen, migratie en verschuivende machtsverhoudingen
          zijn te groot voor individuele lidstaten alleen. Onze beweging zet
          zich in voor het versterken van het Europa dat we allemaal delen.
        </p>
      </div>
      <div>
        <div id={styles.voltButtonContainer}>
          <a href="#" title="">
            <div className={styles.voltButton}>
              <p>Volt Nederland</p>
            </div>
          </a>
          <a href="#" title="">
            <div className={styles.voltButton}>
              <p>Volt Europa</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
