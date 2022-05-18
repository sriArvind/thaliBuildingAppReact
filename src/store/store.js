import { configureStore } from '@reduxjs/toolkit';
import checkoutSlice from '../slices/checkoutSlice';

export const store = configureStore({
    reducer: {
        checkout: checkoutSlice
    }
});