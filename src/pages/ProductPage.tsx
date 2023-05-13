import React from 'react'
import { ProductType, getProducts, setProducts } from '../store/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product/Product'

type ProductPageProps = {}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  console.log("P=>", products)
  React.useEffect(() => {
    const getProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json()
      dispatch(setProducts(products))
    }
    getProducts();
  }, [])


  return (
    <div className='App' style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
      {products.map((product: ProductType, index: number) => {
        return <Product {...product} />
      })}
    </div>
  )
}

export default ProductPage;