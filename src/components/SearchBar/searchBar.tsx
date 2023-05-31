import React, { useCallback } from 'react';

import './searchBar.scss';
import searchIcon from './searchIcon.svg';

interface Props {
    setIsLoading: Function;
    setMovies: Function;
}

function SearchBar(props: Props) {
    const { setIsLoading, setMovies } = props;

    const searchForMovies = useCallback(
        (event: any) => {
            event.preventDefault();
            const searchQuery = event.target[0].value;

            setIsLoading(true);

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRlZTA2MDQyYjM0MjZjMWIxYTUyZWUzNDJiYjBjZiIsInN1YiI6IjY0NzQ5ZjczY2MyNzdjMDExNjFjZWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PJTncFPCiXKvecugtzed7wIPETWBiNlGwIv4bYEoSE',
                },
            };

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
        [setIsLoading, setMovies]
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
