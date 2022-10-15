import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  Header,
  BackButton,
  CategoryText,
  BrandsContainer,
  LoadingContainer,
  LoadgingText,
} from './styles';
import { Feather } from '@expo/vector-icons';
import { DefaultScreen } from '../DefaultScreen';
import api from '../../services/api';
import IBrand from '../../interfaces/brands';
import { FlatList, Heading, HStack, Spinner } from 'native-base';
import { ProductCard } from '../../components/ProductCard';
import Product from '../../interfaces/product';
import Routes from '../../routes';

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function ProductList(): JSX.Element {
  const { goBack } = useNavigation();

  const route = useRoute();

  const brand: IBrand = route.params;

  console.log(JSON.stringify(brand) + ' Marca do parametro');

  const [data, setData] = useState<Product[]>([]);

  const theme = useTheme();

  useEffect(() => {
    console.log('Effect executando product brand');
    api.get<Product[]>('/brands').then(response => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {}, [data]);

  return (
    <DefaultScreen>
      <Header>
        <BackButton onPress={goBack}>
          <Feather
            name="arrow-left"
            color={theme.colors.placeholder}
            size={28}
          />
        </BackButton>
      </Header>
      <BrandsContainer>
        {data.length == 0 ? (
          <LoadingContainer>
            <HStack space={5}>
              <Spinner accessibilityLabel="Loading posts" />
              <Heading color={theme.colors.primary} fontSize="xl">
                <LoadgingText>Loading</LoadgingText>
              </Heading>
            </HStack>
          </LoadingContainer>
        ) : (
          <>
            <CategoryText>{brand?.name}</CategoryText>
            <FlatList
              data={data}
              horizontal={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <ProductCard product={item} />}
              numColumns={2}
            />
          </>
        )}
      </BrandsContainer>
    </DefaultScreen>
  );
}
