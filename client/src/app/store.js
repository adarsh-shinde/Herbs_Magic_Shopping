import {configureStore} from '@reduxjs/toolkit';
import itemReducer from '../Features/Items/ItemSlice';
export const store = configureStore({
    reducer: {
       items: itemReducer,
    }
})