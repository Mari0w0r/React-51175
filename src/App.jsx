import * as React from 'react';
import {Navbar} from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Item/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemDetail/ItemDetailContainer';
import CartContextProvider from "./Context/CartContext";
import { CartContainer } from './components/Cart/CartContainer';
import { Checkout } from './components/Checkout/Checkout';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
  <CartContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:productoid' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout/:orderid' element={<Checkout/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </CartContextProvider>
  );
}

export default App;
