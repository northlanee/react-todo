import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./TodoList.css";

const TodoList = ({ todos }) => {
    const todoItems = todos.map(({ id, ...todoData }) => {
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...todoData} />
            </li>
        );
    });

    return <ul className="list-group todo-list">{todoItems}</ul>;
};

export default TodoList;
