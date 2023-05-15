import React from 'react'
import { BeakerIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import bag from './../../assets/images/bag.png'
import { Link } from 'react-router-dom'
type Props = {}


const Header = (props: Props) => {
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
                {/* <div>Electronics</div>
                <div>Jewelery</div>
                <div>Men's clothing</div>
                <div>Women's clothing</div> */}
            </nav>
            <input type='text' className='rounded-lg h-9 w-80 px-2' placeholder='Search product' />
            <div className='h-full flex items-center mx-10 basis-10' >
                <ShoppingCartIcon className="h-6 w-6  text-gray-700" />
            </div>
        </nav>
    )
}

export default Header