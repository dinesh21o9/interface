import React from 'react';

const SearchBar = () => {
  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button" type="submit" value="submit_button" id="btn">
        <img src="/assets/search.png" alt="Search" className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
