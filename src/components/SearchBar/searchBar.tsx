import React, { useCallback } from 'react';

import './searchBar.scss';
import searchIcon from './searchIcon.svg';
import options from '../../helpers/apiOptions';

interface Props {
    setIsLoading: Function;
    setMovies: Function;
    setSelectedGenre: Function;
}

function SearchBar(props: Props) {
    const { setIsLoading, setMovies, setSelectedGenre } = props;

    const searchForMovies = useCallback(
        (event: any) => {
            event.preventDefault();
            const input = event.target[0];
            const searchQuery = input.value;
            input.value = '';

            if (!searchQuery) return;

            setSelectedGenre(-1);
            setIsLoading(true);

            fetch(
                `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=1`,
                options
            )
                .then((response) => response.json())
                .then((response) => {
                    setMovies(response?.results);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                });
        },
        [setIsLoading, setMovies, setSelectedGenre]
    );

    return (
        <form className="search-bar" onSubmit={(e) => searchForMovies(e)}>
            <input
                type="text"
                placeholder="Search for movies..."
                className={'search-input'}
            />
            <button type={'submit'} className={'search-button'}>
                <img src={searchIcon} alt={'search'} />
            </button>
        </form>
    );
}

export default SearchBar;
