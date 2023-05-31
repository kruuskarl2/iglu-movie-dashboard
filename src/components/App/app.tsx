import React, { useState, useEffect } from 'react';

import Header from '../Header';
import MovieList from '../MovieList';
import Loading from '../Loading';
import './app.scss';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
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
            'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
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
    }, []);

    return (
        <div className="app">
            <Header setIsLoading={setIsLoading} setMovies={setMovies} />
            {isLoading ? <Loading /> : <MovieList movies={movies} />}
            <footer className={'footer'} />
        </div>
    );
}

export default App;
