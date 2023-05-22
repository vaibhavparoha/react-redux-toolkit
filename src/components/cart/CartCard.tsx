import React from 'react';
import { useDispatch } from 'react-redux';
import { CardType, deleteFromCart, updateQuantity } from '../../store/slices/cartSlice';



const CartCard: React.FC<CardType> = ({
    title,
    image,
    price,
    quantity,
    id
}) => {

    console.log(quantity)
    const dispatch = useDispatch()

    const removeFormCart = () => {
        dispatch(deleteFromCart(id))
    }

    const handleSelectChange = (e: any) => {
        dispatch(updateQuantity({
            id: id,
            quantity: parseInt(e.target.value)
        }))
    }

    return (
        <div className='flex border-gray-100 border shadow-md p-10 relative mt-7 h-auto'>
            <div className='absolute top-3 right-3 font-thin cursor-pointer' onClick={removeFormCart}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="basis-1/3 px-3 flex justify-center items-center">
                <img className='max-h-36 min-h-36 w-auto' src={image} />
            </div>
            <div className="basis-2/3 px-3 pl-10">
                <header className='font-poppins text-lg'>{title}</header>
                <div className='flex py-4 align-middle ju'>
                    <div className='pr-4'>Red</div>
                    <div className='w-px bg-gray-400 h-6'></div>
                    <div className='px-4'>Large</div>
                </div>
                <div className='flex align-middle'>
                    <div className='pr-4 font-semibold'>$ {price}</div>
                </div>
                <div className='flex align-middle font-thin mt-4'>
                    <select className='w-16 border' value={quantity} onChange={handleSelectChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default CartCard