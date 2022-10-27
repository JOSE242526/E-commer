import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
import "./style/order.css"

const FilterCategory = () => {

const [categories, setCategories] = useState()

useEffect(() => {
const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
    axios.get(URL)
    .then(res => setCategories(res.data.data.categories))
    .catch(err => console.log(err))
}, [])


const dispatch = useDispatch()

const handleFecthCategory = id => {
        if(id) {
           dispatch(getProductsByCategory(id))
        } else {
            dispatch(getAllProducts())
        }
}


  return (
    <article className=''>
        <h3 className='title__order'>Category</h3>
        <ul>
            <li className='order__category' onClick={() => handleFecthCategory()}>All Products</li>
            {
                categories?.map(category => (
                    <li onClick={() => handleFecthCategory(category.id)}
                    key={category.id}
                    >{category.name}
                    </li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory