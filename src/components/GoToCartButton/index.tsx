import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';

import { AddToCartButtonText, AddToCartButton } from './styles';

export function GoToCartButton({ active = false }: BulletProps): JSX.Element {
  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const { navigate } = useNavigation<Nativation>();

  function handleGoToCart() {
    //Alert.alert('Mensagem', 'Alerta');
    navigate('CartItens', {});
  }

  return (
    <AddToCartButton onPress={() => handleGoToCart()}>
      <AddToCartButtonText>Ver sacola</AddToCartButtonText>
    </AddToCartButton>
  );
}
