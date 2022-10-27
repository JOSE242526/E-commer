import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingProducts, descendingProducts } from "../../store/slices/products.slice"
import "./style/order.css"



const OrderByPrice = () => {

const dispatch = useDispatch()

const handleAscending = () => {
    dispatch(ascendingProducts())
}

const handleDescending = () => {
    dispatch(descendingProducts())
}

  return (
    
    <div className='card__order'>
        <button onClick={handleAscending} className='order__btn'>Ascending ↑</button>
        <button onClick={handleDescending} className='order__btn'>Descending ↓</button>
    </div>
  )
}

export default OrderByPrice