import React, { useState, useEffect } from 'react';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';
import {
  Container,
  LoadingContainer,
  AddToCartButton,
  AddToCartButtonText,
} from './styles';

import { Header } from '../../components/Header';
import { HighlightsBanner } from '../../components/HighlightsBanner';
import { OptionsMenu } from '../../components/OptionsMenu';
import { OptionsList, OptionsListProps } from '../../components/OptionsList';
import { Product } from '../../components/ProductCard';

import bannerImages from '../../utils/banners';

import api from '../../services/api';
import { useCartContext } from '../../context/cartContext';
import { GoToCartButton } from '../../components/GoToCartButton';

export interface ResponseObject {
  id: string;
  key: string;
  name: string;
  products: Product[];
}

export function Home(): JSX.Element {
  const [optionsList, setOptionsList] = useState<OptionsListProps[]>([]);
  const [loading, setLoading] = useState(false);

  const { cartItems } = useCartContext();

  const theme = useTheme();

  const scrollInYAnimation = useSharedValue(0);

  const scrollInYHandler = useAnimatedScrollHandler(event => {
    scrollInYAnimation.value = event.contentOffset.y;
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await api.get<ResponseObject[]>('/categories');

      const data = response.data.map(item => ({
        title: item.name,
        products: item.products.map(product => ({
          ...product,
          priceFormated: Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price),
          discountFormated: Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(product.price - (product.discount / 100) * product.price),
        })),
      }));
      setOptionsList(data);
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <Container>
      <Header scrollInYAnimation={scrollInYAnimation} />
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size={32} color={theme.colors.primary} />
        </LoadingContainer>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollInYHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingBottom: 50,
          }}
        >
          <HighlightsBanner images={bannerImages} />
          <OptionsMenu />
          {optionsList.map(option => (
            <OptionsList
              key={option.title}
              title={option.title}
              products={option.products}
            />
          ))}
        </Animated.ScrollView>
      )}
      {cartItems.length > 0 && <GoToCartButton></GoToCartButton>}
    </Container>
  );
}
