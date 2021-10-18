
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from '../../Images/favicon.ico'
import './NavBar.css'

const NavBar = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar className="navbar" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className="logo-style" to="/home"><img src={Logo} alt="" width="60" height="60" />Optilica</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="nav-style">
                            <Link to="/home">Home</Link>
                            <Link to="/services">serveses</Link>
                            <Link to="/contect">Contect Us</Link>
                            {user?.email ?
                                <Link to="/home"> <Button onClick={logOut} className="main-btn rounded-pill"> LogOut</Button></Link> :
                                <Link to="/login"> <Button className="main-btn rounded-pill">Login </Button></Link>
                            }
                            <br />
                            <Navbar.Text>

                                <Link to="/home">{user?.displayName}</Link>
                            </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;