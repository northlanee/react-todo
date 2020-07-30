import React, { useState } from "react";

import "./AddItemForm.css";

const AddItemForm = ({ addTodo }) => {
    const [newLabel, setNewLabel] = useState("");

    const submitHandler = (e) => {
        addTodo(newLabel);
        setNewLabel("");
        e.preventDefault();
    };

    return (
        <form className="add-item-form d-flex" onSubmit={submitHandler}>
            <input
                type="text"
                className="form-control"
                placeholder="New task"
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    );
};

export default AddItemForm;
