import React, {FC} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import cl from './NavbarReact.module.scss'
import {Link} from "react-router-dom";

const NavbarReact: FC = () => {
    return (
        <Navbar bg='white'>
            <Container>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='me-auto'>
                        <Nav.Link><Link className={cl.navbar_btn} to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link className={cl.navbar_btn} to="/posts">Posts</Link></Nav.Link>
                        <Nav.Link><Link className={cl.navbar_btn} to="/users">Users</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarReact;