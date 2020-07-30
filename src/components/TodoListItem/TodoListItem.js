import React from "react";

import "./TodoListItem.css";

const TodoListItem = ({
    id,
    label,
    important,
    done,
    deleteTodo,
    toggleImportant,
    toggleDone,
}) => {
    const itemStyle = `todo-list-item${done ? " done" : ""}${
        important ? " important" : ""
    }`;

    return (
        <span className={itemStyle}>
            <span
                className="todo-list-item-label"
                onClick={() => toggleDone(id)}
            >
                {label}
            </span>
            <button
                type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={() => toggleImportant(id)}
            >
                <i className="fa fa-exclamation" />
            </button>
            <button
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={() => deleteTodo(id)}
            >
                <i className="fa fa-trash-alt" />
            </button>
        </span>
    );
};

export default TodoListItem;
