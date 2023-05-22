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
            state.cartList?.push({ ...action.payload, quantity: 1 })
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, quantity: number }>) => {
            const index = state.cartList.findIndex((item: CardType) => item.id = action.payload.id);
            state.cartList[index].quantity = action.payload.quantity
        },
        deleteFromCart: (state, action: PayloadAction<number>) => {
            const index = state.cartList.findIndex((item: CardType) => item.id = action.payload);
            state.cartList.splice(index, 1);
        }
    },
})

export const {
    addToCart,
    updateQuantity,
    deleteFromCart
} = cartSlice.actions

export const getCartList = (state: RootState) => state.cart.cartList

export default cartSlice.reducer