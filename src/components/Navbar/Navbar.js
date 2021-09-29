import {Navbar, Container, Nav} from 'react-bootstrap';
import React from 'react'
import {NavLink} from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/actions/authActions';

const TodoNavbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => {
        console.log(state.firebase.auth);
    })

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Todo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Nav>
                    <NavLink className="nav-link" to="/signin">SignIn</NavLink>
                    <NavLink className="nav-link" to="/signup">Signup</NavLink>
                    <NavLink className="nav-link" to="/logout" onClick={dispatch(logOut())}>LogOut</NavLink>
                </Nav>
                <Avatar style={{backgroundColor : 'deeppink'}}>MR</Avatar>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default TodoNavbar;
