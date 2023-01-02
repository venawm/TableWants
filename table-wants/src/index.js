import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#0F0E0E',
        color: 'white',
      }
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
        <App/>
    </ChakraProvider>
  </React.StrictMode>
);
