import {createSelector} from 'reselect'

const selectShopData = (state)=> state.shopData;


export const selectShopItems = createSelector(
    [selectShopData],
   (data) =>  data
)

export const selectShopItemsForOverview = createSelector(
    [selectShopData],
    (data) => {
        const keys = Object.keys(data);
        return keys.map(key=>data[key] )

    }
)

export const selectCollections = (collectionURLParam)=>
        createSelector( [selectShopItems],
        collections => collections[collectionURLParam]


    )

    


        

