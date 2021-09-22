import React from 'react';
import { Container } from 'react-bootstrap';
import Todo from './Todo/Todo';

const Home = (props) => {
    return (
        <Container className="justify-content-md-center">
        <ul >
          {props.todos.map((todo, idx) => <Todo todo={todo}/>)}
        </ul>
      </Container>
    )
}

export default Home;
