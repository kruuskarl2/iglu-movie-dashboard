import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import Categories from '../Categories';
import './header.scss';

interface Props {
    setIsLoading: Function;
    setMovies: Function;
}

function Header(props: Props) {
    const [selectedGenre, setSelectedGenre] = useState(-1);

    return (
        <header className="header">
            <div className="search">
                <h1 className={'movies-title'}>Popular movies</h1>
                <SearchBar {...props} setSelectedGenre={setSelectedGenre} />
            </div>
            <Categories
                {...props}
                selectedGenre={selectedGenre}
                setSelectedGenre={setSelectedGenre}
            />
        </header>
    );
}

export default Header;
