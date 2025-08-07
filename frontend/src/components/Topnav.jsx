
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

const Topnav=()=>{
    return(
        <>
        <Navbar id="top">
        <Container>
          <Navbar.Brand href="#home" id="title">CRUD OPRATION</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" className='head'>Home</Nav.Link>
            <Nav.Link as={Link} to="insert" className='head'>Insert</Nav.Link>
            <Nav.Link as={Link} to="display" className='head'>Display</Nav.Link>
            <Nav.Link as={Link} to="update" className='head'>Update</Nav.Link>
            <Nav.Link as={Link} to="search" className='head'>Search</Nav.Link>
            <Nav.Link as={Link} to="contact" className='head'>Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;