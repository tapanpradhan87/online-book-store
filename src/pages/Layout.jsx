import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppContext from "../contexts/AppContext";

export default function Layout() {
  const { cart } = useContext(AppContext);

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="books">
              Books
            </Nav.Link>
            <Nav.Link as={NavLink} to="cart">
              Cart({cart.length})
            </Nav.Link>
            <Nav.Link as={NavLink} to="contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        style={{
          height: "calc(100vh - 150px)",
          overflow: "auto",
          padding: "10px",
        }}
      >
        <Outlet />
      </div>
      <footer
        style={{
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          marginTop: "auto",
        }}
      >
        Layout Footer
      </footer>
    </div>
  );
}
