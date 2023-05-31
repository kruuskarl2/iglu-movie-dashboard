import React, { useState, useEffect, useCallback } from 'react';

import './categories.scss';
import options from '../../helpers/apiOptions';

interface Genre {
    name: string;
    id: number;
}

interface Props {
    setIsLoading: Function;
    setMovies: Function;
    setSelectedGenre: Function;
    selectedGenre: number;
}

function Categories(props: Props) {
    const [genres, setGenres] = useState([]);
    const [moreGenres, setMoreGenres] = useState([]);
    const { setIsLoading, setMovies, selectedGenre, setSelectedGenre } = props;

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            options
        )
            .then((response) => response.json())
            .then((response) => {
                const genres = response?.genres;
                setMoreGenres(genres.splice(5));
                setGenres(genres);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const selectGenre = useCallback(
        (selectedGenre: number) => {
            setIsLoading(true);

            const genreQueryParam =
                selectedGenre === -1 ? '' : `&with_genres=${selectedGenre}`;

            fetch(
                `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${genreQueryParam}`,
                options
            )
                .then((response) => response.json())
                .then((response) => {
                    setMovies(response?.results);
                    setIsLoading(false);
                    setSelectedGenre(selectedGenre);
                })
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                });
        },
        [setIsLoading, setMovies]
    );

    if (!genres.length || !moreGenres.length) {
        return <div className="genres hidden" />;
    }

    const dropdownGenresJSX = moreGenres.map((genre: Genre) => {
        const { id, name } = genre;

        const isActiveClass = id === selectedGenre ? ' active' : '';

        return (
            <div
                key={id}
                className={'category' + isActiveClass}
                onClick={() => selectGenre(id)}
            >
                {name}
            </div>
        );
    });

    const genresJSX = genres.map((genre: Genre) => {
        const { id, name } = genre;

        const isActiveClass = id === selectedGenre ? ' active' : '';

        return (
            <div
                key={id}
                className={'category' + isActiveClass}
                onClick={() => selectGenre(id)}
            >
                {name}
            </div>
        );
    });

    const allMoviesClass = selectedGenre === -1 ? 'active' : '';

    return (
        <div className="categories">
            <div className={'category-container'}>
                <div
                    className={'category ' + allMoviesClass}
                    onClick={() => selectGenre(-1)}
                >
                    All movies
                </div>
                {genresJSX}
            </div>
            <div className={'category more'}>
                More
                <div className={'dropdown'}>{dropdownGenresJSX}</div>
            </div>
        </div>
    );
}

export default Categories;
