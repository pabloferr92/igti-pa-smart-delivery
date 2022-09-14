import { Feather } from '@expo/vector-icons';
import React, { useState, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { useCartContext } from '../../context/cartContext';

import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Container,
  Header,
  BackButton,
  ColdBadge,
  ImageContainer,
  ProductImage,
  ProductDetails,
  ProductDescription,
  ProductPrice,
  CheckoutContainer,
  ProductQuantityInput,
  ProductQuantityInputText,
  RemoveAmountProductButton,
  AddAmountProductButton,
  AddManyProductsContainer,
  AddManyProductsButton,
  AddManyProductsText,
  AddToCartButton,
  AddToCartButtonText,
  ColdBadgeText,
} from './styles';

import { Product } from '../../components/ProductCard';

import SnowflakeIcon from '../../assets/icons/snowflake.svg';

type RouteParams = {
  product: Product;
};

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function Details(): JSX.Element {
  const route = useRoute();
  const { product } = route.params as RouteParams;
  const { goBack } = useNavigation();

  const { addICartItem, removeCartItem, verifyIfContainsCartItem, cartItems } =
    useCartContext();

  const [quantity, setQuantity] = useState(1);
  const [price] = useState(() => {
    if (product.discount > 0) {
      return product.price - (product.discount / 100) * product.price;
    }
    return product.price;
  });

  const { navigate } = useNavigation<Nativation>();

  function handleShowProductDetail() {
    navigate('Details', { product });
  }

  const theme = useTheme();

  const [quantityLeft, quantityRight] = useMemo(
    () => String(quantity).padStart(2, '0').split(''),
    [quantity],
  );

  const totalPrice = useMemo(() => {
    const totalPriceAmount = quantity * price;

    return totalPriceAmount;
  }, [quantity, price]);

  function handleAddProductAmount(amount: number) {
    if (amount < 0 && quantity === 1) return;

    setQuantity(oldState => oldState + amount);
  }

  function handleAddToCart() {
    addICartItem({
      product: product,
      quantity: quantity,
      total_price: totalPrice,
    });
    navigate('CartItens', {});

    console.log('executando add to cart ' + JSON.stringify(cartItems));
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={goBack}>
          <Feather
            name="arrow-left"
            color={theme.colors.placeholder}
            size={28}
          />
        </BackButton>
        {product.cold && (
          <ColdBadge>
            <SnowflakeIcon width={24} height={24} />
            <ColdBadgeText>GELADA</ColdBadgeText>
          </ColdBadge>
        )}
      </Header>
      <ImageContainer>
        <ProductImage resizeMode="cover" source={{ uri: product.image }} />
      </ImageContainer>

      <ProductDetails>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          {product.discount ? product.discountFormated : product.priceFormated}
        </ProductPrice>
      </ProductDetails>

      <CheckoutContainer>
        <ProductQuantityInput>
          <RemoveAmountProductButton onPress={() => handleAddProductAmount(-1)}>
            <Feather
              name="minus"
              color={
                quantity === 1 ? theme.colors.placeholder : theme.colors.primary
              }
              size={24}
            />
          </RemoveAmountProductButton>

          <ProductQuantityInputText>
            {quantityLeft}
            {quantityRight}
          </ProductQuantityInputText>

          <AddAmountProductButton onPress={() => handleAddProductAmount(1)}>
            <Feather name="plus" color={theme.colors.primary} size={24} />
          </AddAmountProductButton>
        </ProductQuantityInput>

        <AddManyProductsContainer>
          <AddManyProductsButton onPress={() => handleAddProductAmount(6)}>
            <AddManyProductsText>+ 6 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton onPress={() => handleAddProductAmount(12)}>
            <AddManyProductsText>+ 12 un.</AddManyProductsText>
          </AddManyProductsButton>

          <AddManyProductsButton onPress={() => handleAddProductAmount(15)}>
            <AddManyProductsText>+ 15 un.</AddManyProductsText>
          </AddManyProductsButton>
        </AddManyProductsContainer>

        <AddToCartButton
          onPress={() => {
            handleAddToCart();
          }}
        >
          <AddToCartButtonText>ADICIONAR ({quantity})</AddToCartButtonText>
          <AddToCartButtonText>R$ {totalPrice.toFixed(2)}</AddToCartButtonText>
        </AddToCartButton>
      </CheckoutContainer>
    </Container>
  );
}
