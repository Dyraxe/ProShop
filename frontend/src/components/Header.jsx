import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import styles from "./Header.module.css";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <Navbar.Brand href="">
            <img src={logo} alt="proShop" />
            ProSH
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className={styles.navItem} href="/cart">
                <FaShoppingCart /> <span className={styles.navText}>Cart</span>
              </Nav.Link>
              <Nav.Link className={styles.navItem} href="/login">
                <FaUser /> <span className={styles.navText}>Sign In</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
