import React from 'react'
import "./style/cartProduct.css"
import axios from "axios"
import getConfig from '../../../utils/getConfig'
import { useDispatch } from 'react-redux'
import { getAllProducts } from '../../../store/slices/products.slice'


const CartProduct = ({product}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart/1'
        axios.delete(URL, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProducts)
            })
            .catch(err => console.log(err))
    }

  return (
    <article>
        <h2>{product.title}</h2>
        <ul>
            <li><span>Price</span>{product.price}</li>
            <li><span>Quantity</span>{product.productsInCart.quantity}</li>
        </ul>
        <button onClick={handleDelete} className='card-p__btn'><i className="fa-regular fa-trash-can"></i></button>
    </article>
  )
}

export default CartProduct