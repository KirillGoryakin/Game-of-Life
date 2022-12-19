import ReactDOM from 'react-dom/client';
import './assets/index.css';
import { App } from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#f3ebff',
      100: '#d6c7ee',
      200: '#b8a3de',
      300: '#9c7ecf',
      400: '#8059c0',
      500: '#663fa6',
      600: '#503182',
      700: '#39225e',
      800: '#22143a',
      900: '#0d0519',
    },
    secondary: {
      50: '#ffeae5',
      100: '#f3c7c0',
      200: '#e5a49a',
      300: '#d98172',
      400: '#cd5e4b',
      500: '#b44432',
      600: '#8d3426',
      700: '#65251b',
      800: '#3f150e',
      900: '#1c0400',
    },
    'custom.grey': {
      50: '#f4f0fc',
      100: '#dad4e0',
      200: '#bfb8c7',
      300: '#a59caf',
      400: '#8c8098',
      500: '#72667e',
      600: '#595063',
      700: '#3f3948',
      800: '#27212c',
      900: '#110914',
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);