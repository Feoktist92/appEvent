import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from './slices/cartSlice';
import { itemsReducer } from './slices/itemsSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        items: itemsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
