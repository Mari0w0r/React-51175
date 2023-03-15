import * as React from 'react';
import {CssBaseline, ThemeProvider,} from '@mui/material';
import {MuiNavbar} from './components/Navbar/MuiNavbar';
import {theme} from './components/Theme/MuiTheme';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MuiNavbar/>
    <ItemListContainer contenido="TECLADOS"/>
    <ItemListContainer contenido="MOUSEPADS"/>
    <ItemListContainer contenido="MOUSES"/>
    </ThemeProvider>
  );
}

export default App;
