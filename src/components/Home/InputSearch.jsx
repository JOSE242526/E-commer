import React from 'react'
import "../Home/style/input.css"

const InputSearch = ({setInputText, inputText}) => {


    const handleChange = e => {
        setInputText(e.target.value)
    }

  return (
    <div className='card__search'>
    <input className='input_search' value={inputText} onChange={handleChange} type="text" placeholder='What are you looking for?'></input>
    </div>
    
  )
}

export default InputSearch