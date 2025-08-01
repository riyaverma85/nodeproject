
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Topnav=()=>{
    return(
        <>
        <Navbar id="top">
        <Container>
          <Navbar.Brand href="#home">Crud Opration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;