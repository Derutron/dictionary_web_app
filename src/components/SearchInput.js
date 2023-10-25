// src/SearchInput.js

// import React from 'react';
// import '../css/SearchInput.css'; // We'll create this CSS file in the next step.
// import SearchIcon from '../icons/search.svg'

// const SearchInput = () => {
//   return (
//     <div className="search-container">
//       <input type="text" placeholder="Keyboard" />
//       <img className='search-icon'
//         src={SearchIcon} alt="Search Icon" />
//     </div>
//   );
// };

// export default SearchInput;





import React, { useState } from 'react';
import '../css/SearchInput.css'; 
import SearchIcon from '../icons/search.svg';

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a word"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <img
        className="search-icon"
        src={SearchIcon}
        alt="Search Icon"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
