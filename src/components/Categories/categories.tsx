import React from 'react'

import './categories.scss'
import data from './dummyData'

function Categories() {
    const { genres } = data
    genres.splice(5)

    const dropdownCategoriesJSX = genres.map((genre) => {
        const { id, name } = genre

        return (
            <div key={id} className={'category'}>
                {name}
            </div>
        )
    })

    const categoriesJSX = genres.map((genre) => {
        const { id, name } = genre

        return (
            <div key={id} className={'category'}>
                {name}
            </div>
        )
    })

    return (
        <div className="categories">
            <div className={'category-container'}>
                <div className={'category__active'}>All movies</div>
                {categoriesJSX}
            </div>
            <div className={'category__more'}>
                More
                <div className={'dropdown'}>{dropdownCategoriesJSX}</div>
            </div>
        </div>
    )
}

export default Categories
