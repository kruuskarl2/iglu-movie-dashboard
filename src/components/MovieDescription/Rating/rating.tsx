import React from 'react';

import './rating.scss';
import filledStar from './star_filled.svg';
import emptyStar from './star_empty.svg';

function Rating({ rating }: { rating: number }) {
    const emptyStarsJSX = [];
    for (let i = 0; i < 5; i++) {
        emptyStarsJSX.push(<img src={emptyStar} alt="filled-star" key={i} />);
    }

    const filledStarsJSX = [];
    for (let i = 0; i < 5; i++) {
        filledStarsJSX.push(<img src={filledStar} alt="filled-star" key={i} />);
    }

    const filledPercentange = (rating / 5) * 100;

    return (
        <div className="rating">
            <div className={'empty-stars'}>{emptyStarsJSX}</div>
            <div
                className={'filled-stars'}
                style={{ width: `${filledPercentange}%` }}
            >
                {filledStarsJSX}
            </div>
        </div>
    );
}

export default Rating;
