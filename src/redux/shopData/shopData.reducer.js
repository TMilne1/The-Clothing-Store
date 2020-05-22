import SHOP_DATA from './shop.data'

const INITIAL_STATE = SHOP_DATA

const shopDataReducer =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default shopDataReducer;