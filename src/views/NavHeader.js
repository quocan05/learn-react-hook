import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
const NavHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Quoc An</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
              <Link className="nav-link" to="/clock">
                Clock
              </Link>
              <Link className="nav-link" to="/detail">
                Detail
              </Link>
              <Link className="nav-link" to="/gay">
                Gay Check
              </Link>
              <Link className="nav-link" to="/posts">
                Posts
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavHeader;
