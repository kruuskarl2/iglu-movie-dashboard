import React, { useState } from 'react';

import './movieList.scss';
import MovieDescription from '../MovieDescription';
import data from './dummyData';

function MovieList() {
    const [selectedMovieId, setSelectedMovieId] = useState(-1);

    const moviesJSX = data.results.map((movie) => {
        const { poster_path: posterPath, id } = movie;

        const isSelected = selectedMovieId === id;

        const movieDescription = isSelected ? (
            <>
                <div className={'arrow'}></div>
                <MovieDescription movieId={id} />
            </>
        ) : null;

        return (
            <div
                className={`movie-card ${isSelected ? 'selected' : ''}`}
                key={id}
                onClick={() => setSelectedMovieId(id)}
            >
                <img
                    src={'http://image.tmdb.org/t/p/w500/' + posterPath}
                    alt="poster"
                    className={'poster'}
                />
                {movieDescription}
            </div>
        );
    });

    return (
        <div className="movie-list">
            <div className="movie-list-container">{moviesJSX}</div>
        </div>
    );
}

export default MovieList;
