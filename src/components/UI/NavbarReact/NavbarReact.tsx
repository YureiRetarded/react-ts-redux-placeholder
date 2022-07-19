import React, {FC} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import cl from './NavbarReact.module.scss'
import {LinkContainer} from "react-router-bootstrap";

const NavbarReact: FC = () => {
    return (
        <Navbar bg='white'>
            <Container className='p-0 mx-auto justify-content-center'>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Container className={cl.wrapper}>
                    <Navbar.Collapse id="navbar-nav" className='px-3'>
                        <LinkContainer to='/'>
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src="/logo.svg"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </LinkContainer>
                        <Nav className='me-auto'>
                            <LinkContainer to='/posts'>
                                <Nav.Link>Posts</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='users'>
                                <Nav.Link>Users</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default NavbarReact;