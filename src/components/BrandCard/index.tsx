import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, BrandImage, shadowStyle, DescriptionText } from './styles';
import IBrand from '../../interfaces/brands';
import { Alert } from 'react-native';

type BrandCardProps = {
  brand: IBrand;
};

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function BrandCard({ brand }: BrandCardProps): JSX.Element {
  const { navigate } = useNavigation<Nativation>();

  function handleShowProductListByBrand() {
    console.log('Indo para lista por marca');
    navigate('ProductList', brand);
  }

  return (
    <Container
      style={shadowStyle}
      onPress={() => {
        handleShowProductListByBrand();
      }}
    >
      <BrandImage source={{ uri: brand.image }} />
      <DescriptionText>{brand.description + ' teste'}</DescriptionText>
    </Container>
  );
}
