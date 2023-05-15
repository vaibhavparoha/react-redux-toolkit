import React from 'react'
import { ProductType, getProducts, setProducts } from '../store/slices/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../components/product/Product'
import { useParams } from 'react-router-dom'

type ProductPageProps = {}

const ProductPage: React.FC<ProductPageProps> = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const { category } = useParams()

  console.log("P=>", products)

  const loadProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json()
    dispatch(setProducts(products))
  }

  React.useEffect(() => {
    if (products.length === 0)
      loadProducts();
  }, [])

  React.useEffect(() => {

    const getProductsByCategory = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const products = await response.json()
      dispatch(setProducts(products))
    }
    if (category)
      getProductsByCategory();
    else
      loadProducts();
  }, [category])


  return (
    <div className='flex'>
      <aside className='basis-1/4'>
        Filter
      </aside>
      <div className='flex basis-3/4 flex-row justify-start sm:flex-wrap'>
        {products.map((product: ProductType, index: number) => {
          return <Product {...product} />
        })}
      </div>
    </div>
  )
}

export default ProductPage;