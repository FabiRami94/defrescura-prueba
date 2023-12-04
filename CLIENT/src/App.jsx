
import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';
import Frutas from './components/Frutas/Frutas';
import Compras from './components/Compras/Compras';
import Verduras from './components/Verduras/Verduras';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
  
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(cart)
  };

  return (
    <>
      <div>
        <header style={{position: 'sticky', top: '0', zIndex: '2'}}><NavBar></NavBar></header>
        <Routes>
          <Route path = '/' element = {<Inicio></Inicio>}></Route> 
          <Route path='/frutas' element = {<Frutas addToCart={addToCart}></Frutas>}></Route>   
          <Route path='/verduras' element = {<Verduras addToCart={addToCart}></Verduras>}></Route>
          <Route path='/compras' element = {<Compras cart={cart} setCart={setCart} addToCart={addToCart}></Compras>}></Route>
        </Routes> 
      </div>
    </>
  )
}

export default App
