import React from 'react';

import './movieList.scss';
import data from './dummyData';

function MovieList() {
    const moviesJSX = data.results.map(movie => {
        const { poster_path: posterPath, id } = movie;
        return (<div className={'movie-card'} key={id}>
            <img src={'http://image.tmdb.org/t/p/w500/' + posterPath} alt='poster' className={'poster'}/>
        </div>)
    })

    return (
        <div className='movie-list'>
            <div className="movie-list-container">
                {moviesJSX}
            </div>
        </div>
    );
}

export default MovieList;
