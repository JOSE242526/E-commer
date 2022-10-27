import React from 'react'
import "./style/order.css"

const FilterPrice = ({setFilterByPrice}) => {

  const handleSubmit = e => {
    e.preventDefault()
    const from = +e.target.from.value
    const to = +e.target.to.value
    const obj = {
      from: from,
      to: to !== 0 ? to : Infinity
    }
    setFilterByPrice(obj)
  }

  return (
    <form className='filter-drop-down' onSubmit={handleSubmit}>
      <h3 className='title__order'>Price</h3>
      <div>
        <label className='label__input' htmlFor="from">From</label>
        <input className='input__order' type="number" id='from' />
      </div>
      <div>
        <label className='label__input' htmlFor="to">To</label>
        <input className='input__order' type="number" id='to' />
      </div>
      <button className='filter-price__btn'>Filter</button>
    </form>
  )
}

export default FilterPrice
