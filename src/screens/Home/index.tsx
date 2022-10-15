import React, { useState, useEffect } from 'react';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';
import { Container, LoadingContainer } from './styles';

import { Header } from '../../components/Header';
import { HighlightsBanner } from '../../components/HighlightsBanner';
import { OptionsMenu } from '../../components/OptionsMenu';
import { OptionsList, OptionsListProps } from '../../components/OptionsList';

import bannerImages from '../../utils/banners';

import api from '../../services/api';
import { useCartContext } from '../../context/cartContext';
import { GoToCartButton } from '../../components/GoToCartButton';
import Product from '../../interfaces/product';
import { ICategory } from '../../interfaces/category';

export interface ResponseObject {
  id: string;
  key: string;
  name: string;
  products: Product[];
}

export interface ScreenData {
  title: string;
  name: string;
  products: Product[];
}

export function Home(): JSX.Element {
  const [optionsList, setOptionsList] = useState<ScreenData[]>([]); // dados exibidos na tela inicial
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [screenData, setScreenData] = useState<ScreenData[]>([]);

  const { cartItems } = useCartContext();

  const theme = useTheme();

  const scrollInYAnimation = useSharedValue(0);

  const scrollInYHandler = useAnimatedScrollHandler(event => {
    scrollInYAnimation.value = event.contentOffset.y;
  });

  /*
  {
    "title": "CERVEJAS",
    "products": [
      {
        "id": "1",
        "description": "Heineken 350ml",
        "image": "https://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/cerveja-heineken-lata-350-ml1-157b2 e5b56d0a3b51c15676907824683-640-0.jpg",
        "price": 5,
        "cold": true,
        "discount": 0,
        "priceFormated": "R$5,00",
        "discountFormated": "R$5,00"
      }
    ]
  }
  
  */

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
      //setOptionsList(data);
      setLoading(false);
    }

    loadData();
  }, []);

  // Effect para pegar as categorias e gerar objeto para ser renderizado.
  useEffect(() => {
    async function loadData() {
      const { data } = await api.get<ICategory[]>('/categories_oficial');

      let screen_data: Array<any> = [];

      data.forEach((ele: ICategory) => {
        screen_data.push({
          title: ele.display_value,
          name: ele.name,
          products: [],
        });
      });

      setScreenData(screen_data);
    }

    loadData();
  }, []);

  // Effect para pegar o objeto que será renderizado e atribuir os produtos corretos na devida categoria

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get<Product[]>('/products');

      let screen_data = screenData;

      data.forEach((ele: Product) => {
        const index = screen_data.findIndex((screen: ScreenData) => {
          return screen.name === ele.category;
        });
        if (index != -1) {
          screen_data[index].products.push({
            ...ele,
            priceFormated: Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(ele.price),
            discountFormated: Intl.NumberFormat('pt-BR', {
              currency: 'BRL',
              style: 'currency',
            }).format(ele.price - (ele.discount / 100) * ele.price),
          });
        }
      });
      setOptionsList(screen_data);
      //console.log('Lista de produtos final ' + JSON.stringify(screen_data));
    }

    loadData();
  }, [screenData]);

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
