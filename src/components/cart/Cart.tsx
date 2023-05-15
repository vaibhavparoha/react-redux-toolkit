import React from 'react'
import { useSelector } from 'react-redux'
import { getCartList } from '../../store/slices/cartSlice'

type Props = {}

const Cart = (props: Props) => {

    const cartList = useSelector(getCartList)
    return (
        <div>
            {cartList.map((cart) => {
                return <div>{cart.title}</div>
            })}
        </div>
    )
}

export default Cart