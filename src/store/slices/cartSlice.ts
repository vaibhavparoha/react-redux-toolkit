import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type CardType = {
    id: number;
    title: string;
    price: number;
    image: string
    quantity: number;
}

type InitialState = {
    cartList: CardType[];
}

const initialState: InitialState = {
    cartList: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CardType>) => {
            state.cartList?.push(action.payload)
        },
        updateCart: (state, action: PayloadAction<CardType>) => {
            state.cartList?.push(action.payload)
        },
    },
})

export const {
    addToCart,
    updateCart
} = cartSlice.actions

export const getCartList = (state: RootState) => state.cart.cartList

export default cartSlice.reducer