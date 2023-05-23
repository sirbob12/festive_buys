import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import thunk from 'redux-thunk';


const store = configureStore({
    reducer:{
        cart: cartReducer
    }
},applyMiddleware(thunk))


export default store;