import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearLine } from "readline";
import { createJSDocCallbackTag } from "typescript";
import { changePassword, checkPasswordFail } from "../../store/auth/actions";
import { selectAdmin, selectToken } from "../../store/auth/selectors";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const token = useSelector(selectToken);
  const admin = useSelector(selectAdmin);
  const id = admin.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const passwordMessage = admin.passwordMessage;

  const submitForm = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (newPassword === checkPassword) {
      dispatch(changePassword(newPassword, id, currentPassword));
      setCurrentPassword("");
      setCheckPassword("");
      setNewPassword("");
    } else {
      dispatch(checkPasswordFail());
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (newPassword === checkPassword) {
        setCurrentPassword("");
        setCheckPassword("");
        setNewPassword("");
      } else {
        dispatch(checkPasswordFail());
      }
    }
  };

  useEffect(() => {
    if (token === null) {
      history.push("/login");
    }
  }, [token, history]);

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Verander Wachtwoord</h1>
        {passwordMessage !== null ? (
          <Alert
            variant={
              passwordMessage === "Nieuw wachtwoord opgeslagen."
                ? "success"
                : "danger"
            }
          >
            {passwordMessage}
          </Alert>
        ) : null}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Huidig Wachtwoord</Form.Label>
          <Form.Control
            value={currentPassword}
            onChange={(event) => setCurrentPassword(event.target.value)}
            type="password"
            placeholder="Huidig Wachtwoord"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Nieuw Wachtwoord</Form.Label>
          <Form.Control
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            onKeyPress={handleKeyPress}
            type="password"
            placeholder="Nieuw wachtwoord"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Herhaal nieuw wachtwoord</Form.Label>
          <Form.Control
            value={checkPassword}
            onChange={(event) => setCheckPassword(event.target.value)}
            onKeyPress={handleKeyPress}
            type="password"
            placeholder="Herhaald nieuw wachtwoord"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Opslaan
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
