
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import NavBar from './components/NavBar/NavBar';
import Frutas from './components/Frutas/Frutas';
import Compras from './components/compras/Compras';
import Verduras from './components/Verduras/Verduras';

function App() {

  return (
    <>
      <div>
        <header style={{position: 'sticky', top: '0', zIndex: '2'}}><NavBar></NavBar></header>
        <Routes>
          <Route path = '/inicio' element = {<Inicio></Inicio>}></Route> 
          <Route path='/frutas' element = {<Frutas></Frutas>}></Route>   
          <Route path='/verduras' element = {<Verduras></Verduras>}></Route>
          <Route path='/compras' element = {<Compras></Compras>}></Route>
        </Routes> 
      </div>
    </>
  )
}

export default App
