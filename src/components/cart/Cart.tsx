import React from 'react'
import { useSelector } from 'react-redux'
import { getCartList } from '../../store/slices/cartSlice'
import CartCard from './CartCard'
import Total from './Total'

type Props = {}

const Cart = (props: Props) => {

    const cartList = useSelector(getCartList)
    return (
        <div className='flex mx-32'>
            <div className='basis-2/3 mr-20'>
                {cartList.map((cart) => {
                    return <CartCard {...cart} />
                })}
            </div>
            <div className='basis-1/3'>
                <Total />
            </div>

        </div>
    )
}

export default Cart