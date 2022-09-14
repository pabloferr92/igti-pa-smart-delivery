import React, { useEffect } from 'react';
import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Container, Header, BackButton, CategoryText } from './styles';
import { Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { DefaultScreen } from '../DefaultScreen';
import api from '../../services/api';
import IBrand from '../../interfaces/brands';

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function ProductBrandList(): JSX.Element {
  const { goBack } = useNavigation();

  const theme = useTheme();

  useEffect(() => {
    console.log('Effect executando product brand');
    api.get<IBrand[]>('/brands').then(response => {
      console.log('response ' + JSON.stringify(response));
    });
  }, []);

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
        <CategoryText>Cervejas Geladissimas</CategoryText>
      </Header>
    </DefaultScreen>
  );
}
