import React from 'react'
import { ProductType } from '../../store/slices/productSlice'
const Product: React.FC<ProductType> = ({ title, image }) => {
    const showDetails = () => {

    }

    return (
        <div style={{ alignItems: 'center', flexBasis: '25%', cursor: 'pointer', width: '25%', display: 'flex', flexDirection: 'column' }} onClick={showDetails}>
            <img height={'auto'} width={'70%'} src={image} />
            <div style={{ width: '25%', fontSize: '10px' }}>{title}</div>
        </div>
    )
}

export default Product