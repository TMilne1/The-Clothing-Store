import {combineReducers} from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './directory/directory.reducer'
import shopDataReducer from './shopData/shopData.reducer'


const persistConfig= {
    key:'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer, //user info persistance handled by firebase
    cart: cartReducer,
    directory:directoryReducer,
    shopData: shopDataReducer
})


export default persistReducer(persistConfig, rootReducer)

