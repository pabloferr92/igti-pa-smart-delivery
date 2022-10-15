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

export function OrdersList(): JSX.Element {
  const { goBack } = useNavigation();

  const route = useRoute();

  const [data, setData] = useState<Product[]>([]);

  const theme = useTheme();

  useEffect(() => {
    api.get<Product[]>('/oreders').then(response => {
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
        <Text>Lista de pedidos</Text>
      </BrandsContainer>
    </DefaultScreen>
  );
}
