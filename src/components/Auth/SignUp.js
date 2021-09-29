import React, {useState} from 'react';
import {Form, Row, Col, Button, Container, Card}  from 'react-bootstrap';
import '../../index.css';

const initialData = {
    firstName: '',
    lastName: '',
    email: '', 
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formData, setFormData] = useState(initialData);

    const changeHandler = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("Form Submitted");
        setFormData(initialData);
    }

    return (
        <Form className="form">
        <Row className="mb-3 justify-content-md-center">
            <Col xs={8} md={4}>
                <Form.Group controlId="firstName">
                <Form.Label className="text">First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" onChange={changeHandler}/>
                </Form.Group>

                <Form.Group controlId="lastName">
                <Form.Label className="text">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" onChange={changeHandler}/>
                </Form.Group>

                <Form.Group controlId="email">
                <Form.Label className="text">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={changeHandler} />
                </Form.Group>

                <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={changeHandler} />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={changeHandler} />
                </Form.Group>

                <Button className="mx-auto my-2"  variant="primary" type="submit" onClick={submitHandler}>
                    Submit
                </Button>
            </Col>
        </Row>
        </Form>
    )
}

export default SignUp;
