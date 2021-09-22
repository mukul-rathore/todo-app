import {Navbar, Container, Nav} from 'react-bootstrap';
import React from 'react'
import {NavLink} from 'react-router-dom';

const TodoNavbar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Todo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavLink className="nav-link" to="/signin">Login</NavLink>
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default TodoNavbar
