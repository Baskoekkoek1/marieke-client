import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toggleDeleteLinkMode } from "../../store/mediaLinks/actions";

export default function DeleteAlert() {
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleDeleteLinkMode());
  };
  return (
    <div>
      <h1>Weet je zeker dat je deze link wil verwijderen?</h1>
      <Button>Ja, dat zeg ik toch?</Button>
      <Button variant="primary" type="submit" onClick={close}>
        Oeps, nee sorry.
      </Button>
    </div>
  );
}
