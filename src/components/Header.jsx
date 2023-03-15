import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Link to="/"> <Navbar.Brand >Proshop</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                        <Nav >
                            <Link to="/cart"> <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link></Link>
                            <Link to="/login">   <Nav.Link ><i className='fas fa-user'></i> Sign In</Nav.Link></Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;