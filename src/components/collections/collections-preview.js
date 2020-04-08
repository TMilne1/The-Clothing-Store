import React from 'react';
import './collections-preview.styles.scss'
import CollectionItem from './collection-item';

const CollectionsPreview =({title,items})=>{
    return(
        <div className='collection-preview'> 
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {
                    items.filter((item,idx)=>idx < 4).map(({id, ...itemProps})=>(                           
                            <CollectionItem key={id}{...itemProps}></CollectionItem>

                    ))

                    
                }

            </div>
            

        </div>
    )


}

export default CollectionsPreview;