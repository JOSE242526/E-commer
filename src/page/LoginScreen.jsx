import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useForm} from "react-hook-form"
import "./style/login.css"

const LoginScreen = () => {


   const {handleSubmit, register, reset} = useForm()
   const [isLogged, setIsLogged] = useState(false)



   const submit = data => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
            axios.post(URL, data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.data.token)
                setIsLogged(true)
            })
            .catch(err => console.log(err))
   }    
  
   useEffect(() => {
    if(localStorage.getItem('token')){
      setIsLogged(true)
    } else {
      setIsLogged(false)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  if(isLogged) {
    return (
      <div className='card__logged'>
        <h2>User Logged ✅</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  } 


  return (
    <div className='card__loggid'>
        <form className='loggid' onSubmit={handleSubmit(submit)}>
            <div>
              <p className='welcom__loggid'>Welcome! Enter your email and password to continue</p>
                <label  htmlFor="email">Email</label>
                <input className='loggid__email' type="email" id='email' {...register("email")} />
            </div>
            <div>
                <label  htmlFor="password">Password</label>
                <input className='loggid__password' type="password" id='password' {...register("password")} />
            </div>
            <button className='loggid__btn'>Login</button>
        </form>
    </div>
   
  )
}

export default LoginScreen