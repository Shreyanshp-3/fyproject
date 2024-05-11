import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import custommTheme from './components/Navbar/themes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={custommTheme}>

    <React.StrictMode>
      <BrowserRouter>

        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ChakraProvider>
);

