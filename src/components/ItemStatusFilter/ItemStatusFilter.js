import React from "react";

import "./ItemStatusFilter.css";

const ItemStatusFilter = ({ statusFilter, setStatusFilter }) => {
    return (
        <div className="item-status-filter btn-group">
            <button
                type="button"
                onClick={() => setStatusFilter("all")}
                className={`btn ${
                    statusFilter === "all"
                        ? "btn-info"
                        : "btn-outline-secondary"
                }`}
            >
                All
            </button>
            <button
                type="button"
                onClick={() => setStatusFilter("active")}
                className={`btn ${
                    statusFilter === "active"
                        ? "btn-info"
                        : "btn-outline-secondary"
                }`}
            >
                Active
            </button>
            <button
                type="button"
                onClick={() => setStatusFilter("done")}
                className={`btn ${
                    statusFilter === "done"
                        ? "btn-info"
                        : "btn-outline-secondary"
                }`}
            >
                Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;
