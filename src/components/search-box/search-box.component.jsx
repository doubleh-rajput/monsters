import React from 'react';
import './search-box.style.css'

export default ({ searchField, filterMonsters, placeholder }) => (
    <input
        className="search"
        placeholder={placeholder}
        type="search"
        value={searchField}
        onChange={filterMonsters}
    />
)