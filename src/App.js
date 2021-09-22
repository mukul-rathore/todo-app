import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoNavbar from './components/Navbar/Navbar';
import AddTodo from './components/Todo/AddTodo';
import SignIn from '../src/components/Auth/SignIn';
import SignUp from '../src/components/Auth/SignUp';
import {  Container } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container maxWidth="lg">
        <TodoNavbar />
        <Switch>
          <Route path="/" exact component={AddTodo} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
        </Switch>
      </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
