import React from 'react'
import { ProductType } from '../../store/slices/productSlice'
import { useNavigate } from "react-router-dom";
const Product: React.FC<ProductType> = ({ title, image, id, price }) => {
    const navigate = useNavigate();
    const showDetails = () => {
        navigate(`/products/${id}`);
    }

    return (
        <div className='font-poppins flex flex-col basis-1/4 items-center my-5 mb-10 shadow-lg justify-between p-5' onClick={showDetails}>
            <img className='w-1/2 h-3/4' src={image} />
            <div className='font-thin text-sm mt-3'>{title.substring(0, 20)}</div>
            <div className='font-semibold text-md text-red-500'>${price}</div>
        </div>
    )
}

export default Product