import React, { Component } from 'react'
import TodoView from './TodoView'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }
    gettodosData() {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res => {
            const data = res.data
            data.length = 10
            const todos = data.map(todo =>
                    <tr key={todo.id}>
                        <td>{todo.userId}</td>
                        <td>{todo.id}</td>
                        <td>{todo.title}</td>
                        <td><button type="button" onclick={TodoView}>View details</button>
                        <br />
                        <Link to={`/todos/${todo?.id}`}>Edit</Link></td>
                    </tr>
            );
            this.setState({
                todos: todos
            })
        })


    }
    componentDidMount() {
        this.gettodosData()
    }
    render() {

        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Todos