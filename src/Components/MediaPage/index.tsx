import React, { useEffect, useState } from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../index.module.scss";
import { selectAppLoading } from "../../store/appState/selectors";
import { selectToken } from "../../store/auth/selectors";
import {
  deleteLink,
  fetchMediaLinks,
  toggleAddLinkMode,
  toggleDeleteLinkMode,
} from "../../store/mediaLinks/actions";
import {
  selectAddLinkMode,
  selectAllLinks,
  selectDeleteLinkMode,
} from "../../store/mediaLinks/selectors";
import AddLinkForm from "./addLinkForm";
import DeleteAlert from "./deleteAlert";

export default function MediaPage() {
  const [deleteLinkId, setDeleteLinkId] = useState(null);

  const addLinkMode = useSelector(selectAddLinkMode);
  const deleteLinkMode = useSelector(selectDeleteLinkMode);

  const dispatch = useDispatch();

  const allLinks = useSelector(selectAllLinks);
  const isLoading = useSelector(selectAppLoading);
  const token = useSelector(selectToken);

  const deleteHandler = (event: any) => {
    dispatch(toggleDeleteLinkMode());
    setDeleteLinkId(event.target.value);
    console.log(deleteLinkId);
  };

  useEffect(() => {
    dispatch(fetchMediaLinks());
  }, []);

  return (
    <div>
      {/* @ts-ignore */}
      {addLinkMode ? <AddLinkForm /> : null}
      {/* @ts-ignore */}
      {deleteLinkMode ? <DeleteAlert id={deleteLinkId} /> : null}
      {token && !addLinkMode ? (
        <Button variant="success" onClick={() => dispatch(toggleAddLinkMode())}>
          + Link toevoegen
        </Button>
      ) : null}
      <h1 className={styles.mediaPageTitle}>
        {isLoading ? null : "Marieke in de media"}
      </h1>
      <CardDeck id={styles.cardDeck}>
        {/* @ts-ignore */}
        {allLinks.map((link) => {
          return (
            <div key={link.id} className={styles.cardContainer}>
              <Card className={styles.card}>
                <Card.Header className={styles.cardHeader}>
                  {link.tag}
                  {token ? (
                    <Button
                      className={styles.deleteLinkButton}
                      value={link.id}
                      onClick={deleteHandler}
                      variant="danger"
                    >
                      - Verwijder
                    </Button>
                  ) : null}
                </Card.Header>
                <a href={link.link} className={styles.cardLink}>
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
                </a>
              </Card>
            </div>
          );
        })}
      </CardDeck>
    </div>
  );
}
