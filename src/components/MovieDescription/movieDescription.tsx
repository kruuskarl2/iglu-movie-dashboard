import React from 'react';

import './movieDescription.scss';
import data from './dummyData';
import Rating from './Rating';

function MovieDescription({ movieId }: { movieId: number }) {
    const {
        original_title: originalTitle,
        vote_average: rating,
        overview,
        genres,
        backdrop_path: backdropPath,
    } = data;

    const genresJSX = genres.map((genre) => {
        const { name, id } = genre;

        return (
            <div className={'genre'} key={id}>
                {`#${name}`}
            </div>
        );
    });

    const fiveStarRating = rating / 2;
    const backdropUrl = 'http://image.tmdb.org/t/p/w500/' + backdropPath;

    return (
        <div className="movie-description">
            <div
                className={'container'}
                style={{ backgroundImage: `url(${backdropUrl})` }}
            >
                <div className={'text-backdrop'}>
                    <div className={'title'}>{originalTitle}</div>
                    <Rating rating={fiveStarRating} />
                    <div className={'overview'}>{overview}</div>
                    <div className={'genres'}>{genresJSX}</div>
                </div>
            </div>
        </div>
    );
}

export default MovieDescription;
