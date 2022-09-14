import React from 'react';

import { useNavigation } from '@react-navigation/native';
import IProduct from '../../interfaces/product';
import ICart from '../../interfaces/cart';

import {
  Container,
  ProductDescriptionText,
  ProductGeneralText,
  ProductImage,
} from './styles';

type CartDetailProps = {
  cart: ICart;
};

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function CartItemDetail({ cart }: CartDetailProps): JSX.Element {
  const { navigate } = useNavigation<Nativation>();

  return (
    <Container>
      <ProductImage
        source={{
          uri: cart.product.image,
        }}
      ></ProductImage>
      <ProductDescriptionText>
        {cart.product.description}
      </ProductDescriptionText>
      <ProductGeneralText>Quantidade {cart.quantity}</ProductGeneralText>
      <ProductGeneralText>
        Total: R$ {cart.total_price.toFixed(2).replace('.', ',')}
      </ProductGeneralText>
    </Container>
  );
}
