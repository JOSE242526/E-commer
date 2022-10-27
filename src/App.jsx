import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import ProtectedRoutes from './page/ProtectedRoutes'
import Cart from './page/Cart'
import Purchases from './page/Purchases'
import ProductId from './page/ProductId'
import LoginScreen from './page/LoginScreen'
import Header from './components/Shared/Header'


function App() {



  return (  
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductId />} />
        <Route path='/login' element={<LoginScreen />} />

        <Route element={<ProtectedRoutes />} >
          <Route path='/cart' element={<Cart />}> </Route>
          <Route path='/purchases' element={<Purchases />}> </Route>
        </Route>
      </Routes>
    </div>
  )
}


export default App
