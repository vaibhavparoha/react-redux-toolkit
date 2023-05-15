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
    productList: ProductType[];
    selectedProduct?: ProductType | undefined;
}

const initialState: InitialState = {
    productList: [],
    selectedProduct: undefined
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
            state.productList = action.payload
        },
        setSelectedProduct: (state, action: PayloadAction<ProductType>) => {
            state.selectedProduct = action.payload
        },
    },
})

export const {
    setProducts,
    setSelectedProduct
} = productSlice.actions

export const getProducts = (state: RootState) => state.product.productList
export const getSelectedProduct = (state: RootState) => state.product.selectedProduct

export default productSlice.reducer