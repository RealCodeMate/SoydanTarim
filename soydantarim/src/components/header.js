import react from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../sass/components/_header.scss";
import logo from "../assets/newLogo.png";

export default function Header() {
  return (
    <Navbar key="lg" expand="lg">
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
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/">
                <h5>Anasayfa</h5>
              </Nav.Link>
              <NavDropdown title="Ürünler" id="basic-nav-dropdown" >
                <NavDropdown.Item as={NavLink} to="/ürünler">Zirai İlaçlar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/gübreler">Gübreler</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/tohumlar">Tohumlar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/fideler">Fideler</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/tarım-aletleri">Tarım Aletleri</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/galeri">
                <h5>Galeri</h5>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hakkımızda">
                <h5>Hakkımızda</h5>
              </Nav.Link>
            </Nav>
            <Nav.Link
              className="justify-content-end"
              as={NavLink}
              to="/iletişim"
            >
              <h5>İletişim</h5>
            </Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
