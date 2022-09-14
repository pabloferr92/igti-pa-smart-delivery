import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';

import { AddToCartButtonText, AddToCartButton } from './styles';

export function CheckoutCartButton({
  active = false,
}: BulletProps): JSX.Element {
  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const { navigate } = useNavigation<Nativation>();

  function handleGoToCart() {
    console.log('executando handle go to cart');
    Alert.alert(
      'Seu pedido foi enviado!',
      'Breve você receberá seu pedido em sua casa!',
    );
    navigate('Home', {});
  }

  return (
    <AddToCartButton onPress={() => handleGoToCart()}>
      <AddToCartButtonText>Finalizar compra</AddToCartButtonText>
    </AddToCartButton>
  );
}
