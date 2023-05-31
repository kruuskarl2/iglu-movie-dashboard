import React, { useState } from 'react';

import './movieList.scss';
import MovieDescription from '../MovieDescription';
import data from './dummyData';

interface Movie {
    poster_path: string;
    id: number;
    title: string;
}

function MovieList({ movies }: { movies: Movie[] }) {
    const [selectedMovieId, setSelectedMovieId] = useState(-1);

    const moviesJSX = movies.map((movie) => {
        const { poster_path: posterPath, id, title } = movie;

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
                    alt={title}
                    className={'poster'}
                />
                {movieDescription}
            </div>
        );
    });

    const moviesExist = !!movies.length;

    return (
        <div className="movie-list">
            {moviesExist ? (
                <div className="movie-list-container">{moviesJSX}</div>
            ) : (
                <div className={'error'}>Nothing to show :/</div>
            )}
        </div>
    );
}

export default MovieList;
