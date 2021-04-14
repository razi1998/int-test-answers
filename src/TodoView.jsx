import React from 'react'

const TodoView = (props) => {
    const { todo } = props;

    return (
        <div>
        <div>
            <h1>Todos</h1>
        </div>
            {(todo?.userId) ? <div>
                <h3>ID: {todo?.userId}</h3>
                <h3>Title: {todo?.title}</h3>
                <h3>Completed: {todo?.completed}</h3>
                </div> : <div>No details Available</div>}
        </div>
    )
}

export default TodoView
