import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteLink,
  toggleDeleteLinkMode,
} from "../../store/mediaLinks/actions";
import styles from "../../index.module.scss";

export default function DeleteAlert(id: number) {
  const dispatch = useDispatch();
  const deleteId = id;

  const close = () => {
    dispatch(toggleDeleteLinkMode());
  };

  const deleteLinkHandler = () => {
    dispatch(deleteLink(id));
    dispatch(toggleDeleteLinkMode());
  };

  console.log("ALERT ID", id);
  return (
    <div id={styles.deleteAlertContainer}>
      <div id={styles.deleteAlert}>
        <h1>Weet je zeker dat je deze link wil verwijderen?</h1>
        <div id={styles.deleteAlertButtonContainer}>
          <Button onClick={deleteLinkHandler}>Ja, dat zeg ik toch?</Button>
          <Button onClick={close}>Oeps, nee sorry.</Button>
        </div>
      </div>
    </div>
  );
}
