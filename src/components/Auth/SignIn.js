import React, {useState} from 'react';
import {Form, Row, Col, Button}  from 'react-bootstrap';
import '../../index.css';
import { signIn } from '../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

const initialData = {
    email: '', 
    password: ''
}

const SignIn = () => {
    const [formData, setFormData] = useState(initialData);
    const dispatch = useDispatch();
    const error = useSelector(state => state.auth.authError)

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(signIn(formData));
        console.log("Form Submitted");
        setFormData(initialData);
    }
    return (
        <Form className="form">
        <Row className="mb-3 justify-content-md-center">
            <Col xs={8} md={4}>
                <Form.Group controlId="email">
                <Form.Label className="text">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={changeHandler} />
                </Form.Group>

                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changeHandler} />
                </Form.Group>
                <Button className="mx-auto my-2"  variant="primary" type="submit" onClick={submitHandler}>
                    Submit
                </Button>
            </Col>
        </Row>
        </Form>
    )
}

export default SignIn;
