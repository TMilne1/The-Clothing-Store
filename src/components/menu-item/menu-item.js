import React from 'react';

const MenuItem=({title, image, subtitle})=>{
    return(
        <div className='menu-item'>
            <div className='contnet'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>{subtitle}</span>
            </div>
        </div>
    )

}

export default MenuItem;