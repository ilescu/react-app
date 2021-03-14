import React from "react";

import './SearchPanel.scss';

const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search records"
        />
    )
}

export default SearchPanel;