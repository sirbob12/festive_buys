import { configureStore } from '@reduxjs/toolkit';
import { reducer as productReducer } from './productsSlice';
import  shoppingCartReducer from './shoppingCart'
//import singleProductReducer from './singleProductSlice';

const store =  configureStore({
  reducer:{
    product: productReducer,
    shoppingCart: shoppingCartReducer
  }
})

export default store;
