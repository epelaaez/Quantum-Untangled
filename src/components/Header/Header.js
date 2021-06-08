import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.css';

import { NavLink } from 'react-router-dom';
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
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav className="mr-auto">
                    <a href='https://medium.com/quantum-untangled' className="nav-link">Blog</a>
                    <NavLink to="/projects" className="nav-link" activeClassName="nav-link-active">Projects</NavLink>
                    <NavLink to="/about" className="nav-link" activeClassName="nav-link-active">About</NavLink>
                    <NavLink to="/contact" className="nav-link" activeClassName="nav-link-active">Contact</NavLink>
                </Nav>
                <Nav className="ml-auto nav-items-right">
                    <NavLink to="/user" className="nav-link" activeClassName="nav-link-active">Log in</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   
    );
}

export default Header;