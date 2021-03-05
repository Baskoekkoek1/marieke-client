import React, { useEffect } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../index.module.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import { fetchMediaLinks } from "../../store/mediaLinks/actions";
import { selectAllLinks } from "../../store/mediaLinks/selectors";

export default function MediaPage() {
  const dispatch = useDispatch();

  const allLinks = useSelector(selectAllLinks);

  useEffect(() => {
    dispatch(fetchMediaLinks());
  }, []);

  const isLoading = useSelector(selectAppLoading);
  return (
    <div>
      <h1 className={styles.mediaPageTitle}>
        {isLoading ? null : "Marieke in de media"}
      </h1>
      {/* <CardDeck
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          width: "90vw",
          padding: "50px",
          margin: "50px",
        }}
      > */}
      <CardDeck id={styles.cardDeck}>
        {/* @ts-ignore */}
        {allLinks.map((link) => {
          return (
            <a className={styles.card} href={link.link}>
              <Card>
                <Card.Header className={styles.cardHeader}>
                  {link.tag}
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={link.imgLink}
                  className={styles.cardImg}
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {link.title}
                  </Card.Title>
                  <Card.Text className={styles.cardText}>
                    {link.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          );
        })}
      </CardDeck>
    </div>
  );
}
