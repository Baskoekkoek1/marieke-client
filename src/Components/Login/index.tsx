import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../store/auth/actions";
import { selectToken } from "../../store/auth/selectors";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  const history = useHistory();

  function submitForm(event: React.MouseEvent<HTMLInputElement>) {
    event.preventDefault();
    dispatch(login(name, password));
    setName("");
    setPassword("");
  }

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  });

  return (
    <Container>
      <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
        <h1 className="mt-5 mb-5">Login</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Naam</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="name"
            placeholder="Gebruikersnaam"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mt-5">
          <Button variant="primary" type="submit" onClick={submitForm}>
            Log in
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
