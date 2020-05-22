import React from 'react'
import { connect } from 'react-redux'
import { selectShopItemsForOverview } from '../../redux/shopData/shopData.selector'
import { createStructuredSelector } from 'reselect';
import './collections-overview.styles.scss'
import CollectionsPreview from '../collections/collections-preview'

const CollectionsOverview=({collection})=>{
     console.log(collection) 
    return(
        
        <div className='collections-overview'>
            {
                collection.map(({ id, ...otherCollectionProps }) => (
                    <CollectionsPreview key={id} {...otherCollectionProps} />
                ))
            }

        </div>
    )
}

const mapStateToProps=createStructuredSelector({
   collection:selectShopItemsForOverview 
})

export default connect(mapStateToProps)(CollectionsOverview)