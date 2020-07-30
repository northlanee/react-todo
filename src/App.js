import React, { useState } from "react";

import AppHeader from "./components/AppHeader/AppHeader";
import SearchPanel from "./components/SearchPanel/SearchPanel";
import TodoList from "./components/TodoList/TodoList";
import ItemStatusFilter from "./components/ItemStatusFilter/ItemStatusFilter";
import AddItemForm from "./components/AddItemForm/AddItemForm";

import "./assets/css/bootstrap.min.css";
import "./assets/css/all.min.css";
import "./App.css";

const App = () => {
    const [maxId, setMaxId] = useState(100);
    const [todoData, setTodoData] = useState([]);
    const [searchParam, setSearchParam] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const createItem = (label) => {
        setMaxId(maxId + 1);
        return {
            id: maxId,
            label: label,
            important: false,
            done: false,
        };
    };

    const addTodo = (label) => {
        const newItem = createItem(label);
        setTodoData([...todoData, newItem]);
    };

    const deleteTodo = (id) => {
        setTodoData(
            todoData.filter((todo) => {
                return id !== todo.id;
            })
        );
    };

    const toggleProperty = (id, propName) => {
        const index = todoData.findIndex((item) => item.id === id);
        const newItem = { ...todoData[index] };
        newItem[propName] = !newItem[propName];
        const newTodoData = [...todoData];
        newTodoData[index] = newItem;
        setTodoData(newTodoData);
    };

    const toggleImportant = (id) => {
        toggleProperty(id, "important");
    };

    const toggleDone = (id) => {
        toggleProperty(id, "done");
    };

    const countDone = () => todoData.filter((item) => item.done).length;
    const countToDo = () => todoData.filter((item) => !item.done).length;

    const filterTodoData = () => {
        if (searchParam) {
            return todoData.filter((item) => {
                return item.label.toLowerCase().indexOf(searchParam) >= 0;
            });
        }
        if (statusFilter === "done") {
            return todoData.filter((item) => {
                return item.done;
            });
        }
        if (statusFilter === "active") {
            return todoData.filter((item) => {
                return !item.done;
            });
        }
        return todoData;
    };

    return (
        <div className="todo-app">
            <AppHeader toDo={countToDo()} done={countDone()} />
            <div className="top-panel d-flex">
                <SearchPanel
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                />
                <ItemStatusFilter
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                />
            </div>

            {filterTodoData().length ? (
                <TodoList
                    todoData={filterTodoData()}
                    deleteTodo={deleteTodo}
                    toggleImportant={toggleImportant}
                    toggleDone={toggleDone}
                />
            ) : (
                <div>No items to show</div>
            )}

            <AddItemForm addTodo={addTodo} />
        </div>
    );
};

export default App;
