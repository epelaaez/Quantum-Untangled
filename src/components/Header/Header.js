import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
    return (
        <Navbar sticky="top" variant="dark" expand="md">
            <Navbar.Brand href="/">
            <img
                src={logo}
                width="30" 
                height="30"
                className="d-inline-block align-top"
                alt="Quantum Untangled logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/blog">Blog</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Nav className="nav-items-right">
                    <Nav.Link href="#user">Log in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    );
}

export default Header;