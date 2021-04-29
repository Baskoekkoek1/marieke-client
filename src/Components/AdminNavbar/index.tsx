import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAdmin } from "../../store/auth/selectors";
import { userLogOut } from "../../store/auth/actions";

export default function () {
  const admin = useSelector(selectAdmin);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          Hallo
          {" " +
            admin.name?.charAt(0).toUpperCase() +
            admin.name?.slice(1) +
            "!"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/media">Media</Nav.Link>
            <Nav.Link href="/changepass">Verander wachtwoord</Nav.Link>
          </Nav>
          <Button
            onClick={() => dispatch(userLogOut())}
            variant="outline-secondary"
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
