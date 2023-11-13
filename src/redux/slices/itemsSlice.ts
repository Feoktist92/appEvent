import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchProducts = createAsyncThunk<Item[], undefined>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get(
            'https://appevent.ru/dev/task1/catalog'
        );
        return await response.data.items;
    }
);
type Item = {
    id: number;
    image: string;
    name: string;
    price: number;
};
interface ItemsSliceState {
    items: Item[];
    status: Status;
}
export enum Status {
    LOADING = 'loading',
    RECEIVED = 'received',
    ERROR = 'error',
}

const initialState: ItemsSliceState = {
    items: [],
    status: Status.LOADING,
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = Status.LOADING;
                state.items = [];
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = Status.RECEIVED;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = Status.ERROR;
                state.items = [];
            });
    },
});

export const { setItems } = itemsSlice.actions;
export const selectItems = (state: RootState) => state.items;
export const itemsReducer = itemsSlice.reducer;
