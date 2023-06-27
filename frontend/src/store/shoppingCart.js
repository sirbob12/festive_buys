import { createSlice } from '@reduxjs/toolkit';

const fetchFromLocalStorage = ()=>{
    let cart = localStorage.getItem('cart');
     if(cart){
        return JSON.parse(localStorage.getItem('cart'));
     }else{
        return [];
     }
}

const storeInLocalStorage = (data)=>{
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    carts:/*fetchFromLocalStorage()*/ [],
    itemsCount:0,
    totalAmount:0,
    isCartMessageOn: false
}

const shoppingCartSlice =  createSlice({
    name:'shoppingCart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           const itemInCart = state.carts.find(item=>item._id === action.payload._id)

           if(itemInCart){
             const tempCart = state.carts.map(item=>{
                if(item._id === action.payload.id){
                    let tempQty = item.quantity + action.payload.quantity;
                    let tempTotalPrice = tempQty * item.price;

                    return {
                        ...item, quantity:tempQty,
                        totalPrice: tempTotalPrice
                    }
                }else{
                    return item;
                }
             });
                 state.carts = tempCart;
                // storeInLocalStorage(state.carts)
           }else{
            state.carts.push(action.payload)
         //  storeInLocalStorage(state.carts)
           }
        },

        getCartTotal: (state)=>{
            state.totalAmount = state.carts.reduce((cartTotal, cartItem)=>{
                return cartTotal += cartItem.totalPrice
            }, 0)

            state.itemsCount = state.carts.length
                
            },

         clearCart:(state)=>{
            state.carts = []
         },

           removeFromCart(state, action){
            const tempCart = state.carts.filter(item => item._id !== action.payload);
            state.carts = tempCart;
            //storeInLocalStorage(state.data);
        },
     }
    
})

export const { addToCart, getCartTotal, clearCart, removeFromCart } = shoppingCartSlice.actions;

export const getAllCarts = (state) => state.shoppingCart.carts;
export const getCartItemsCount = (state) => state.shoppingCart.itemsCount;
export const getCartItemsAmount = (state) => state.shoppingCart.totalAmount;

export default shoppingCartSlice.reducer;