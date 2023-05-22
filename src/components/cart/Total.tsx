import React from 'react'
import { useSelector } from 'react-redux'
import { getCartList } from '../../store/slices/cartSlice'

type Props = {}

const Total = (props: Props) => {
    const cartList = useSelector(getCartList)
    const total = cartList.reduce((acc, cart) => acc + (cart.price * cart.quantity), 0);
    const shipping = cartList.length * 5;
    const tax = ((total * 10) / 100);
    return (
        <div className='flex flex-col border-gray-100 border shadow-md p-10 relative mt-7 h-auto bg-gray-100'>
            <header className='font-poppins text-lg'>
                Order Summary
            </header>
            <div className='flex justify-between my-3'>
                <div>
                    Subtotal
                </div>

                <div>
                    ${total}
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <div>
                    Shipping estimate <div className='text-xs mt-2'>Number of Items x ${5} </div>
                </div>

                <div>
                    ${shipping}
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <div>
                    Tax estimate <div className='text-xs mt-2'>10% </div>
                </div>

                <div>
                    ${tax.toFixed(2)}
                </div>
            </div>
            <div className='flex justify-between my-3 text-lg'>
                <div>
                    Order Total
                </div>

                <div>
                    ${(total + shipping + tax).toFixed(2)}
                </div>
            </div>

            <button className='p-2 mt-4 bg-yellow-600 text-white rounded'>Checkout</button>
        </div>
    )
}

export default Total