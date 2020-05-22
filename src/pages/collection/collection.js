import React from 'react';



import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shopData/shopData.selector'
import CollectionItem from '../../components/collections/collection-item'
import './collection.styles.scss';

const CollectionPage =({collection, history, match})=>{
    const {items, title} = collection

    return(
        <div className = 'collection-page'>
            <h2 className = 'title'> {title} </h2>
                <div className = 'items'>

                    {items.map(item=>(
                        <CollectionItem key={item.id} item ={item}/>   
                        ))
                    }
                </div>
        </div>)
}

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollections(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);