import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './directory.styles.scss'
import {connect} from 'react-redux'
import {selectSection} from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect';

const Directory=({sections})=>{
    
        return (
            <div className='directory-menu'>
                {sections.map(({id, ...others}) =>(
                    <MenuItem key={id} {...others} ></MenuItem>
                )

                )}
            </div>

    )


}

const mapSateToProps = createStructuredSelector({
    sections:selectSection
})

export default connect(mapSateToProps)(Directory);