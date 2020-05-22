import React from 'react';

import CollectionsOverview from '../../components/collections-overview/collections-overview'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection'


const  Shop = ({match})=>{
    const {path} = match; 

        return(
            
            <div className='shop-page'>
                <Route exact path = {`${path}`} component ={CollectionsOverview}/>
                <Route path = {`${path}/:collectionId`} component={CollectionPage}/>
                
            </div>
        )

    
      
        
}



export default Shop;