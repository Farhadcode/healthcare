import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Images/favicon.ico'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <Navbar className="navbar" bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style" to="/home"><img src={Logo} alt="" width="60" height="60" />Optilica</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav-style">
                        <Nav>
                            <Link to="/home">Home</Link>
                            <Link to="/services">serveses</Link>
                            <Link to="/contect">Contect Us</Link>
                            <br />
                            <Navbar.Text>
                                {/* {user?.displayName} */}
                                <Link to="/login">Login</Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;