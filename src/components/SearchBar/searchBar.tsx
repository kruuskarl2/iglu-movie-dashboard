import React from 'react';

import './searchBar.scss';
import searchIcon from './searchIcon.svg';

function SearchBar() {
  return (
    <form className="search-bar">
        <input type='text' placeholder='Search for movies...' className={'search-input'}/>
        <img src={searchIcon} alt={'search'} className={'search-button'} />
    </form>
  );
}

export default SearchBar;
