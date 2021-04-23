import React, { useEffect, useState } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../index.module.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectToken } from "../../store/auth/selectors";
import {
  fetchMediaLinks,
  toggleAddLinkMode,
} from "../../store/mediaLinks/actions";
import {
  selectAddLinkMode,
  selectAllLinks,
} from "../../store/mediaLinks/selectors";
import AddLinkForm from "./addLinkForm";

export default function MediaPage() {
  const addLinkMode = useSelector(selectAddLinkMode);

  const dispatch = useDispatch();

  const allLinks = useSelector(selectAllLinks);
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(fetchMediaLinks());
  }, []);

  return (
    <div>
      {/* @ts-ignore */}
      {addLinkMode ? <AddLinkForm /> : null}
      {token && !addLinkMode ? (
        <button onClick={() => dispatch(toggleAddLinkMode())}>
          Link toevoegen
        </button>
      ) : null}
      <h1 className={styles.mediaPageTitle}>
        {isLoading ? null : "Marieke in de media"}
      </h1>
      <CardDeck id={styles.cardDeck}>
        {/* @ts-ignore */}
        {allLinks.map((link) => {
          return (
            <div key={link.id} className={styles.cardContainer}>
              {/* <Button>Verwijder</Button> */}
              <a href={link.link} className={styles.cardLink}>
                <Card className={styles.card}>
                  <Card.Header className={styles.cardHeader}>
                    {link.tag}
                  </Card.Header>
                  <Card.Body className={styles.cardBody}>
                    <Card.Img
                      variant="top"
                      src={link.imgLink}
                      className={styles.cardImg}
                    />
                    <Card.Title className={styles.cardTitle}>
                      {link.title}
                    </Card.Title>
                    <Card.Text className={styles.cardText}>
                      {link.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          );
        })}
      </CardDeck>
    </div>
  );
}
