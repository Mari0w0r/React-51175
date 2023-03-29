import * as React from 'react';
import {MuiNavbar} from './components/Navbar/MuiNavbar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
  <BrowserRouter>
    <MuiNavbar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
