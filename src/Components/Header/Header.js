import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../../src/images/logo.png';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="light">
                    <Container className='fw-bold'>
                        <Navbar.Brand as={Link} to="/">
                            <img src={logo} height={40} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">

                            </Nav>
                            <Nav>
                                <Nav.Link href="home#services">Services</Nav.Link>
                                <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                                <Nav.Link as={Link} to="about">About</Nav.Link>
                            </Nav>
                            {
                                user ? <button type="button" class="btn btn-light ms-3" onClick={handleSignOut}>Sign Out</button> :
                                    <Nav>
                                        <Nav.Link as={Link} to="login">Login</Nav.Link>
                                    </Nav>
                            }
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;