import React from 'react';
import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Searchbar() {
    return (
    <div className="search-wrap">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input className="search-input" type="text" placeholder="Search" />
    </div>
    );
}

export default Searchbar;