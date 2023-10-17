// src/SearchInput.js

import React from 'react';
import '../css/SearchInput.css'; // We'll create this CSS file in the next step.
import SearchIcon from '../icons/search.svg'

const SearchInput = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Keyboard" />
      <img className='search-icon'
        src={SearchIcon} alt="Search Icon" />
    </div>
  );
};

export default SearchInput;
