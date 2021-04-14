import React, { useEffect, useState } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../index.module.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectToken } from "../../store/auth/selectors";
import { fetchMediaLinks } from "../../store/mediaLinks/actions";
import { selectAllLinks } from "../../store/mediaLinks/selectors";
import AddLinkForm from "./addLinkForm";

export default function MediaPage() {
  const [addLinkMode, setAddLinkMode] = useState(false);

  const dispatch = useDispatch();

  const allLinks = useSelector(selectAllLinks);
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchMediaLinks());
  }, []);

  return (
    <div>
      {addLinkMode ? <AddLinkForm /> : null}
      {token && !addLinkMode ? (
        <button onClick={() => setAddLinkMode(true)}>Link toevoegen</button>
      ) : null}
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
            <a key={link.id} className={styles.card} href={link.link}>
              <Card className={styles.cardBody}>
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
