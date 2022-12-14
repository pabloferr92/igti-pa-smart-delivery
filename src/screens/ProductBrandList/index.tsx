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
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DefaultScreen } from '../DefaultScreen';
import api from '../../services/api';
import IBrand from '../../interfaces/brands';
import { BrandCard } from '../../components/BrandCard';
import { FlatList, Heading, HStack, Spinner } from 'native-base';

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function ProductBrandList(): JSX.Element {
  const { goBack } = useNavigation();

  const [data, setData] = useState<IBrand[]>([]);

  const theme = useTheme();

  useEffect(() => {
    console.log('Effect executando product brand');
    api.get<IBrand[]>('/brands').then(response => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {}, [data]);

  return (
    <DefaultScreen title="Cervejas Geladas">
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
            <CategoryText>Cervejas Geladissimas</CategoryText>
            <FlatList
              data={data}
              horizontal={false}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => <BrandCard brand={item} />}
              numColumns={2}
            />
          </>
        )}
      </BrandsContainer>
    </DefaultScreen>
  );
}
