import React from 'react'

type Props = {}

const itemsClass = 'hover:bg-slate-100 p-2 cursor-pointer'

const Filter = (props: Props) => {
    return (
        <div className='mr-5 font-poppins'>
            <div className='text-lg'>Filters</div>
            <hr />

            <div className='p-3'>
                <div>Size</div>
                <hr />
                <ul className='px-3 py-2 text-sm'>
                    <li className={itemsClass}>XS</li>
                    <li className={itemsClass} >S</li>
                    <li className={itemsClass}>M</li>
                    <li className={itemsClass} >L</li>
                </ul>
            </div>

            <div className='p-3'>
                <div className=''>Price</div>
                <hr />
                <ul className='px-3 py-2 text-sm '>
                    <li className={itemsClass} >Less than 50</li>
                    <li className={itemsClass} >50 to 100</li>
                    <li className={itemsClass} >100 to 150</li>
                    <li className={itemsClass} >150 to 200</li>
                    <li className={itemsClass} >Greater than 200</li>
                </ul>
            </div>
        </div>
    )
}

export default Filter