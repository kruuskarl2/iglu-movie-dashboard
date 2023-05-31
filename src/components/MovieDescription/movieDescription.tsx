import React, { useEffect, useState } from 'react';

import './movieDescription.scss';
import Rating from './Rating';
import Loading from '../Loading';
import options from '../../helpers/apiOptions';

function MovieDescription({ movieId }: { movieId: number }) {
    const [movieDetails, setMovieDetails] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
            .then((response) => response.json())
            .then((response) => {
                setMovieDetails(response);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [movieId]);

    if (isLoading) {
        return (
            <div className="movie-description">
                <Loading />
            </div>
        );
    }

    if (!movieDetails) {
        return (
            <div className="movie-description">
                Could not load movie details.
            </div>
        );
    }

    const {
        original_title: originalTitle,
        vote_average: rating,
        overview,
        genres,
        backdrop_path: backdropPath,
    } = movieDetails;

    const genresJSX = genres.map((genre: any) => {
        const { name, id } = genre;

        return (
            <div className={'genre'} key={id}>
                {`#${name}`}
            </div>
        );
    });

    const fiveStarRating = rating / 2;
    const backdropUrl = 'http://image.tmdb.org/t/p/w1280/' + backdropPath;

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
