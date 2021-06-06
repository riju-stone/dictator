import React from 'react';
import './Search.css';

const Search = ({ handleSearch }) => {
    return <div className="search">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input onChange={(event) => handleSearch(event.target.value)} className="search-input" type="text" placeholder="Type to Search..."></input>
    </div>
}

export default Search;