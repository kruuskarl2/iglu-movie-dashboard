import React from 'react';

import SearchBar from '../SearchBar';
import Categories from '../Categories';
import './header.scss';

function Header() {
  return (
    <header className="header">
        <div className="search">
            <h1 className={'movies-title'}>Popular movies</h1>
            <SearchBar />
        </div>
        <Categories />
    </header>
  );
}

export default Header;
