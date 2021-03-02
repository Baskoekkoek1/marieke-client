import React from "react";
import styles from "../../index.module.scss";
import Social from "../Social";
import VoltInfo from "../VoltInfo";
import ReactPlayer from "react-player";

export default function MainContent() {
  return (
    <div id={styles.mainContent}>
      <img id={styles.profilePic} src={"marieke_profilePic.jpg"} />
      <Social />
      <h1 id={styles.mainContentTitle}>Mijn naam is Marieke Koekkoek,</h1>

      <div id={styles.contentContainer}>
        <p className={styles.mainText}>
          32 jaar en ik sta op nr.4 op de kieslijst voor Volt. <br />
          Ik ben kandidaat voor Volt, omdat ik de standpunten van Volt wil
          uitdragen en wil omzetten in realiteit. Politiek gaat om wat je
          doorgeeft aan de volgende generatie, en vooral ook om wat je niet
          doorgeeft. <br /> Ik wil een betere bescherming van grondrechten
          doorgeven en alle vormen van uitsluiting tegengaan. <br /> Door onder
          andere een humaan migratiebeleid te garanderen, door betere
          bescherming van LHBTI+-rechten en meer actief te werken aan
          inclusiviteit en verbinding in Nederland en Europa. <br /> De garantie
          dat je veilig jezelf kan zijn stopt namelijk niet bij de Nederlandse
          grens.
        </p>
      </div>
      <div id={styles.buttonContainer}>
        <a href="https://voltnederland.org/marieke-koekkoek">
          <div className={styles.button}>
            <p>Meer over mij</p>
          </div>
        </a>
        <a href="/media">
          <div className={styles.button}>
            <p>Media</p>
          </div>
        </a>
      </div>
      <VoltInfo />
      <div className={styles.videoContainer}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Ra0Faw8bnxU"
          className={styles.video}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Aj2MhKQ7ZBQ"
          className={styles.video}
        />
      </div>
    </div>
  );
}
