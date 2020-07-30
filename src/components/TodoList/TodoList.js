import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./TodoList.css";

const TodoList = ({ todoData, deleteTodo, toggleImportant, toggleDone }) => {
    const todoItems = todoData.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...item}
                    deleteTodo={deleteTodo}
                    toggleImportant={toggleImportant}
                    toggleDone={toggleDone}
                />
            </li>
        );
    });

    return <ul className="list-group todo-list">{todoItems}</ul>;
};

export default TodoList;
