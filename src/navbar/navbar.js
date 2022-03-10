import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Navbar,Nav} from 'react-bootstrap';
import './navbar.css'


 export function Navbars() {

  return <div>
  <div > 
                    <Navbar fixed="top" bg="light">
                    <Container>
                        <Navbar.Brand className=''href="#masthead" >Wonderlust Studio</Navbar.Brand>
                        <Nav id="navbartext ">
                            <Nav.Link href="#Services">Services</Nav.Link>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#About">About</Nav.Link>
                            <Nav.Link href="#Contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                    </Navbar>
        </div>


                
 </div>
}

