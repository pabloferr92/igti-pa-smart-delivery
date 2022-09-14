import { StatusBar } from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';

import theme from './src/styles/theme';
import CartProvider from './src/context/cartContext';

export default function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
        <Routes />
      </CartProvider>
    </ThemeProvider>
  );
}
