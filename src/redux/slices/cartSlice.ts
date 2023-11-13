import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { getCartfromLS } from '../../utils/getCartfromLS';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export type CartItem = {
    id: number;
    name: string;
    image: string;
    price: number;
    count: number;
};
interface CartSliceState {
    totalPrice: number;
    products: CartItem[];
}

const { products, totalPrice } = getCartfromLS();

const initialState: CartSliceState = {
    totalPrice,
    products,
};

const findProduct = (state: CartSliceState, action: { payload: CartItem }) =>
    state.products.find((obj) => obj.id === action.payload.id);

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count = 1;
            } else {
                state.products.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice += action.payload.price;
        },
        removeProduct: (state, action: PayloadAction<CartItem>) => {
            const findItem = findProduct(state, action);
            if (findItem) {
                findItem.count = 0;
            }
            state.totalPrice = calcTotalPrice(state.products);
        },
        clearProducts: (state) => {
            state.products = [];
            state.totalPrice = 0;
        },
    },
});

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export const cartReducer = cartSlice.reducer;
