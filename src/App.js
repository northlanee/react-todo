import React from "react";

import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter/ItemStatusFilter";

import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./App.css";

const todos = [
    { id: 0, label: "Drink beer", important: true },
    { id: 1, label: "Learn React", important: false },
    { id: 2, label: "Learn JS", important: true },
];

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todos} />
        </div>
    );
};

export default App;
