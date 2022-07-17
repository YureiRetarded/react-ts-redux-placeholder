import React, {FC} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './NavbarReact.module.scss'
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const NavbarReact: FC = () => {
    return (
        <Navbar bg='white'>
            <Container className='mx-auto col-md-7'>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/posts'>
                            <Nav.Link>Posts</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='users'>
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarReact;