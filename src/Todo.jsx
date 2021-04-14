import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
            formError: ""
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            ...this.state,
            todo: {
                ...this.state.todo,
                [name]: value
            },
            formError: ""
        })
    }


    handleSubmit = () => {
        const { userId, Id, Title, Completed } = this.state.todo
        if (userId, Id, Title, Completed) {
            this.setState({
                ...this.state,
                formError: ""
            })
            this.props.newTodo(this.state.todo)
        } else {
            this.setState({
                ...this.state,
                formError: "Please fill all the fields"
            })
        }
    }

    newTodo = (todos) => {
        
    
        const todo = this.state.todo.filter(item => item.userId !== todos.userId)
        this.setState({
          ...this.state,
          todo: [...todo, todos]
        })

        console.log(this.state.todos)
      }

    render() {
        return (
            <div>
                <form className="container" >
                    <div className="mb-3">
                        <label htmlFor="userId" className="form-label">User Id</label>
                        <input type="text" className="form-control" name="userId" placeholder="Enter User Id" value={this?.state?.todos?.userId} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Id" className="form-label">Id</label>
                        <input type="text" className="form-control" name="Id" placeholder="Enter Id" value={this?.state?.todos?.id} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" name="Title" placeholder="Enter Title" value={this?.state?.todos?.title} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">

                        <label htmlFor="Completed" className="form-label">Completed</label>
                        <input type="text" className="form-control" name="Completed" placeholder="Enter Status" value={this?.state?.todos?.completed} onChange={this.handleChange} />
                    </div>

                    <div className="form-text-valid">{this.state.formError}</div>
                    <br />
                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Todo
