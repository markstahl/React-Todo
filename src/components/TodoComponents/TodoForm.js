import React from "react";

const TodoForm = props => {
    return (
        <form>
            <input
            onChange={props.handleTodoChange}
            type="text"
            name="todos"
            value={props.value}
            placeholder=" To Do..."
            />
            <button onClick={props.handleAddTodo}> Add Todo</button>
            <button onClick={props.handleClearTodolist}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;
