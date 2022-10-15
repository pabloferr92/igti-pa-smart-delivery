import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert } from 'react-native';
import { or } from 'react-native-reanimated';
import { useAuthContext } from '../../context/authContext';
import { useCartContext } from '../../context/cartContext';
import api from '../../services/api';

import { AddToCartButtonText, AddToCartButton } from './styles';

export function CheckoutCartButton({
  active = false,
}: BulletProps): JSX.Element {
  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const { user } = useAuthContext();

  const { navigate } = useNavigation<Nativation>();

  const { cartItems, totalPrice, releaseCart } = useCartContext();

  async function handleGoToCart() {
    const order = await api.post('/orders', {
      user: user?.id,
      created_at: new Date(),
      state: 'submited',
      total_price: totalPrice,
    });

    const cart_to_sent = cartItems;

    cart_to_sent.forEach(async item => {
      const cartItem = await api.post('/carts', {
        ...item,
        order: order.data.id,
      });
    });

    releaseCart();
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
