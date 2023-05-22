import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import bag from './../../assets/images/bag.png'
import { Link, useNavigate } from 'react-router-dom'
import { getCartList } from '../../store/slices/cartSlice'
import { useSelector } from 'react-redux'
type Props = {}


const Header = (props: Props) => {
    const cartList = useSelector(getCartList);

    const navigate = useNavigate()
    return (
        <nav className='shadow-lg font-poppins flex justify-between items-center w-full top-10 sticky bg-pink-50 rounded-md h-20 px-5'>
            <div className='basis-1/4'>
                <Link to={`products`} >
                    <img className='h-16' src={bag} />
                </Link>
            </div>
            <nav className='flex cursor-pointer font-poppins font-thin text-gray-600 justify-between space-x-4 uppercase basis-1/2 mx-5'>
                <Link to={'products/category/electronics'} >Electronics</Link>
                <Link to={'products/category/jewelery'} >Jewelery</Link>
                <Link to={'products/category/men\'s clothing'} >Men's clothing</Link>
                <Link to={'products/category/women\'s clothing'} >Women's clothing</Link>

            </nav>
            <input type='text' className='rounded-lg h-9 w-80 px-2 !outline-none' placeholder='Search Product' />
            <div className='h-full flex items-center mx-10 basis-10 relative justify-between w-full space-x-3' >
                <HeartIcon className="ml-3 h-6 w-6 text-red-500" />
                <div className='cursor-pointer' onClick={() => navigate('/cart')}>
                    <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                    <div className='absolute rounded-xl h-5 w-5 bg-red-500 top-5 -right-3 text-white flex justify-center text-sm' >{cartList.length ?? 0}</div>
                </div>
            </div>
        </nav>
    )
}

export default Header