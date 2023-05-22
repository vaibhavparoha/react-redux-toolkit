import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Filter from './../../components/filter/Filter';

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

type Filter = {
    size: string | undefined,
    price: number | undefined,
    // [key: string]: string | number
}

type InitialState = {
    productList: ProductType[];
    selectedProduct?: ProductType | undefined;
    filter: Filter
}

const initialState: InitialState = {
    productList: [],
    selectedProduct: undefined,
    filter: {
        size: undefined,
        price: undefined
    }
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
        setFilter: (state, action: PayloadAction<{ filterKey: keyof Filter, value: string | number }>) => {
            const { filterKey, value } = action.payload;
            const filter: any = state.filter;
            filter[filterKey] = value;
        }
    },
})

export const {
    setProducts,
    setSelectedProduct,
    setFilter
} = productSlice.actions

export const getProducts = (state: RootState) => state.product.productList
export const getSelectedProduct = (state: RootState) => state.product.selectedProduct

export default productSlice.reducer