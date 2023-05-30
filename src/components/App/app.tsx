import React from 'react';

import Header from '../Header';
import MovieList from '../MovieList';
import './app.scss';

function App() {
    return (
        <div className="app">
            <Header />
            <MovieList />
            <footer className={'footer'} />
        </div>
    );
}

export default App;
