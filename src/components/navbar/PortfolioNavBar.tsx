import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./styles.css";

function BasicExample() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="navbar-words">Barry Percy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{width:"100%"}}>
            <Nav.Link className="navbar-words" href="#home">About</Nav.Link>
            <Nav.Link className="navbar-words" href="#link">Projects</Nav.Link>
            <Nav.Link className="navbar-words" href="#home">Contact</Nav.Link>
            <Button className="navbar-button" variant="outline-primary">Resume/CV</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;