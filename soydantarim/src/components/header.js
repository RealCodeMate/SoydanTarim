import react from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {

  return (
    <Navbar key="lg" expand="lg" bg="light" sticky="top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menü
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/">
                <h5>Anasayfa</h5>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ürünler">
                <h5>Ürünler</h5>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hakkımızda">
                <h5>Hakkımızda</h5>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/iletişim">
                <h5>İletişim</h5>
              </Nav.Link>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}