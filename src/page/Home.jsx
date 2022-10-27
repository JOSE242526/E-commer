import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import InputSearch from '../components/Home/InputSearch'
import OrderByPrice from '../components/Home/OrderByPrice'
import { getAllProducts } from '../store/slices/products.slice'
import "./style/home.css"

const Home = () => {

  const [inputText, setInputText] = useState("")
  const [filterByText, setFilterByText] = useState()
  const [filterByPrice, setFilterByPrice] = useState({
    from: 0,
    to: Infinity
  })



  const products= useSelector(state => state.products)

   const dispatch = useDispatch()

   useEffect(() => {
    dispatch(getAllProducts())
   }, [])
   
   useEffect(() => {
   if(inputText !== "" && products){
    const cb = product => product.title.toLowerCase().includes(inputText.toLowerCase().trim())
    setFilterByText(products.filter(cb))
   } else {
    setFilterByText(products)
   }
   }, [inputText, products])
   
   const callBackFilterPrice = product => {
      return +product.price >= filterByPrice.from && +product.price <= filterByPrice.to
   }


  return (
    <main className='home'>
      <InputSearch 
      setInputText={setInputText}
      inputText={inputText}
      />
      <aside>
      <FilterPrice setFilterByPrice={setFilterByPrice}/>
      <FilterCategory />
      <OrderByPrice />
      </aside>
    <div className='home__container'>
           {
            filterByText?.filter(callBackFilterPrice).map(product => (
              <CardProduct 
              key={product.id}
              product={product}
              />
            ))
          }
    </div>
    </main>
  )
}

export default Home