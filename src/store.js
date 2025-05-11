import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './data/cartSlice';

export default configureStore( {
    reducer: {
        cart: cartReducer,
    },
});