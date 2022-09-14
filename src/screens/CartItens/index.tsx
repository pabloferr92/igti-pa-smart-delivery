import React, { useState, useMemo } from 'react';
import { useCartContext } from '../../context/cartContext';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';
import {
  Container,
  BackButton,
  Header,
  shadowStyle,
  ItensContainer,
  SacolaText,
  TotalPriceText,
} from './styles';
import { useTheme } from 'styled-components';
import { CheckoutCartButton } from '../../components/CheckoutCartButton';
import { CartItemDetail } from '../../components/CartItemDetail';
import { DefaultScreen } from '../DefaultScreen';

export function CartItens(): JSX.Element {
  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const {
    addICartItem,
    removeCartItem,
    verifyIfContainsCartItem,
    cartItems,
    totalPrice,
  } = useCartContext();

  console.log('itens adicionados na sacola' + JSON.stringify(cartItems));
  const theme = useTheme();

  const { goBack } = useNavigation();

  return (
    <DefaultScreen>
      <Container>
        <Header style={shadowStyle}>
          <BackButton onPress={goBack}>
            <Feather
              name="arrow-left"
              color={theme.colors.placeholder}
              size={28}
            />
          </BackButton>
          <SacolaText>Sacola</SacolaText>
        </Header>
        <ItensContainer>
          {cartItems.map(element => {
            return <CartItemDetail cart={element}></CartItemDetail>;
          })}
        </ItensContainer>
        <TotalPriceText>
          Valor total R$ {totalPrice.toFixed(2).replace('.', ',')}
        </TotalPriceText>
        <CheckoutCartButton></CheckoutCartButton>
      </Container>
    </DefaultScreen>
  );
}
