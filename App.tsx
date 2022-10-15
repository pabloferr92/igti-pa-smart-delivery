import { StatusBar } from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { extendTheme, NativeBaseProvider } from 'native-base';

import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';

import theme from './src/styles/theme';
import CartProvider from './src/context/cartContext';
import AuthProvider from './src/context/authContext';

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};

const native_theme = extendTheme({ colors: newColorTheme });

export default function App(): JSX.Element {
  return (
    <AuthProvider>
      <NativeBaseProvider theme={native_theme}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
            <Routes />
          </CartProvider>
        </ThemeProvider>
      </NativeBaseProvider>
    </AuthProvider>
  );
}
