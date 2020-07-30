import React from "react";

import "./SearchPanel.css";

const SearchPanel = ({ searchParam, setSearchParam }) => {
    return (
        <input
            type="text"
            placeholder="Search"
            className="search-input"
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
            value={searchParam}
        />
    );
};

export default SearchPanel;
