import React from 'react';

import './card.style.css'

export default ({ monster }) => {
    return <div className="card-container">
        <img src={`https://robohash.org/${monster.id}.png?set=set1&size=180x180`} alt="monter" />
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
}  