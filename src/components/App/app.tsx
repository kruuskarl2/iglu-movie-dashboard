import React, { useState, useEffect } from 'react';

import Header from '../Header';
import MovieList from '../MovieList';
import Loading from '../Loading';
import './app.scss';
import options from '../../helpers/apiOptions';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

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
