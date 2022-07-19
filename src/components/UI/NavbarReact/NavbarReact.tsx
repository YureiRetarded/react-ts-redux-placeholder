import React, {FC} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import cl from './NavbarReact.module.scss'
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../../assets/logo.svg";

const NavbarReact: FC = () => {
    return (
        <Navbar bg='white'>
            <Container className='p-0 mx-auto justify-content-center'>
                <Navbar.Toggle aria-controls='navbar-nav'/>
                <Container className={cl.wrapper}>
                    <Navbar.Collapse id="navbar-nav" className='px-3'>
                        <LinkContainer to='/react-ts-redux-placeholder/'>
                            <Navbar.Brand>
                                <img
                                    alt=""
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                        </LinkContainer>
                        <Nav className='me-auto'>
                            <LinkContainer to='/react-ts-redux-placeholder/posts'>
                                <Nav.Link>Posts</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/react-ts-redux-placeholder/users'>
                                <Nav.Link>Users</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Button href="https://github.com/YureiRetarded">GitHub</Button>
                    </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    );
};

export default NavbarReact;