import React from 'react';

import SearchBar from '../SearchBar';
import Categories from '../Categories';
import './header.scss';

interface Props {
    setIsLoading: Function;
    setMovies: Function;
}

function Header(props: Props) {
    return (
        <header className="header">
            <div className="search">
                <h1 className={'movies-title'}>Popular movies</h1>
                <SearchBar {...props} />
            </div>
            <Categories {...props} />
        </header>
    );
}

export default Header;
