import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import NotFound from './NotFound';
import Todo from './Todo';
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      todos: []
    }
  }

  newTodo = (todos) => {
    const todo = this.state.todo.filter(item => item.userId !== todos.userId)
    this.setState({
      ...this.state,
      todo: [...todo, todos]
    })
  }


  render() {
    return (
      <div>

        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={() => <Redirect to="/home" />} />

            <Route path="/home" component={Home} />

            <Route path="/todos" component={() => <Todos todos={this.state.todos} />} />

            <Route path="/todo" component={() => <Todo newTodo={this.newTodo}

            />} />

            <Route path="/todo/:id" component={(props) =>
              <Todo todo={this.state.todos.find(todo => todo.id === props.match.params.id)} />} />


            <Route path="/" component={NotFound} />

          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}


export default App