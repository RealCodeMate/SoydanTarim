import react, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from "react-bootstrap/Offcanvas";
import { NavLink } from "react-router-dom";
import "../sass/components/_header.scss";
import soydanTarimLogo from "../assets/soydanTarimLogo.png";

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar key="lg" expand="lg" expanded={expanded}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" onClick={() => setExpanded(false)}>
          <img src={soydanTarimLogo} alt="soydanTarim_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg"  onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="start"
        >
          <Offcanvas.Header  onClick={() => setExpanded(false)}>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Menü
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-start flex-grow-1 pe-3">
              <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
                <h5>Anasayfa</h5>
              </Nav.Link>
              <NavDropdown title="Ürünler" id="basic-nav-dropdown" >
                <NavDropdown.Item as={NavLink} to="/ürünler" onClick={() => setExpanded(false)}>Zirai İlaçlar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/gübreler" onClick={() => setExpanded(false)}>Gübreler</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/tohumlar" onClick={() => setExpanded(false)}>Tohumlar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/fideler" onClick={() => setExpanded(false)}>Fideler</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/ürünler/tarım-aletleri" onClick={() => setExpanded(false)}> Tarım Aletleri</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/galeri" onClick={() => setExpanded(false)}>
                <h5>Galeri</h5>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hakkımızda" onClick={() => setExpanded(false)}>
                <h5>Hakkımızda</h5>
              </Nav.Link>
            </Nav>
            <Nav.Link
              className="justify-content-end"
              as={NavLink}
              to="/iletişim"
              onClick={() => setExpanded(false)}
            >
              <h5>İletişim</h5>
            </Nav.Link>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
