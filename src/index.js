import React from "react";
import ReactDOM from "react-dom";

const AppHeader = () => {
    return <h1>Todo List</h1>;
};

const SearchPanel = () => {
    return <input type="text" placeholder="Search" />;
};

const TodoList = () => {
    return (
        <ul>
            <li>Learn React</li>
            <li>Drink Beer</li>
        </ul>
    );
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
