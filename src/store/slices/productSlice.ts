import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string
    image: string
    rating: {
        rate: number,
        count: number
    }
}


type InitialState = {
    productList: ProductType[]
}

const initialState: InitialState = {
    productList: []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.productList = action.payload
        }
    },
})

export const { setProducts } = productSlice.actions

export const getProducts = (state: RootState) => state.product.productList

export default productSlice.reducer