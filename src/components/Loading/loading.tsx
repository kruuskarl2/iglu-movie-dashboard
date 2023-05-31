import React from 'react';

import './loading.scss';
import loadingIcon from './loadingIcon.svg';

function Loading() {
    return (
        <div className={'loading'}>
            <img src={loadingIcon} alt="loading" />
            Loading...
        </div>
    );
}

export default Loading;
