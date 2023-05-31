import React, { useState, useEffect } from 'react';

import './categories.scss';

interface Genre {
    name: string;
    id: number;
}

function Categories() {
    const [genres, setGenres] = useState([]);
    const [moreGenres, setMoreGenres] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmRlZTA2MDQyYjM0MjZjMWIxYTUyZWUzNDJiYjBjZiIsInN1YiI6IjY0NzQ5ZjczY2MyNzdjMDExNjFjZWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1PJTncFPCiXKvecugtzed7wIPETWBiNlGwIv4bYEoSE',
            },
        };

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

    if (!genres.length || !moreGenres.length) {
        return <div className="categories hidden" />;
    }

    const dropdownCategoriesJSX = moreGenres.map((genre: Genre) => {
        const { id, name } = genre;

        return (
            <div key={id} className={'category'}>
                {name}
            </div>
        );
    });

    const categoriesJSX = genres.map((genre: Genre) => {
        const { id, name } = genre;

        return (
            <div key={id} className={'category'}>
                {name}
            </div>
        );
    });

    return (
        <div className="categories">
            <div className={'category-container'}>
                <div className={'category active'}>All movies</div>
                {categoriesJSX}
            </div>
            <div className={'category more'}>
                More
                <div className={'dropdown'}>{dropdownCategoriesJSX}</div>
            </div>
        </div>
    );
}

export default Categories;
