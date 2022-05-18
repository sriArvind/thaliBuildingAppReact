import { createSlice } from '@reduxjs/toolkit';
import initialData from '../data/initialData';

const initialState = {
    initialData,
    checkedItems: []
};

export const checkoutSlice = createSlice({

    name: 'checkout',

    initialState,

    reducers: {

        addItem: (state, action) => {

            let itemAdded = action.payload.item;

            let index = state.initialData.findIndex(item => item.id === itemAdded.id);

            state.initialData[index].quantity = action.payload.quantity;

            state.checkedItems = [...state.checkedItems, state.initialData[index]];

        },

        removeItem: (state, action) => {

            let itemRemoved = action.payload;

            let index = state.checkedItems.findIndex(item => item.id === itemRemoved.id);

            state.checkedItems.splice(index, 1);

        },

        clearCheckedItems: (state) => {

            state.checkedItems.splice(0, state.checkedItems.length);

        }

    }

});


export const { addItem, removeItem, clearCheckedItems } = checkoutSlice.actions;

export default checkoutSlice.reducer;