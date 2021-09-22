import React, {useState, useEffect} from 'react';
import db from '../../firebase';
import firebase from 'firebase/compat/app';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Home from '../Home';


const AddTodo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({id : doc.id, todo : doc.data().todo})))
    })
    }, [])

  const addTodo = (event) => {
    event.preventDefault();
    //adding to the db
      db.collection('todos').add({
        todo : input,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput('');
  }
    return (
        <>
        <Form>
        <Row className="justify-content-md-center">
            <Col sm={6} className="my-1">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>Write a Todo</Form.Label>
            <Form.Control id="inlineFormInputName" placeholder="Write a Todo" value={input} id="outlined-basic" label="Add Todo" variant="outlined" onChange={(event) =>  setInput(event.target.value)} />
            </Col>
            <Col xs="auto" className="my-1">
            <Button variant="primary" disabled={!input} onClick={addTodo}>Add Todo</Button>
            </Col>
        </Row>
      </Form>
      <Home todos={todos}/>
      </>
    )
}

export default AddTodo
