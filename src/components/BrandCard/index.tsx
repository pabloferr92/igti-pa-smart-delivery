import React, { useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, ProductInfo, BrandImage, shadowStyle } from './styles';
import IBrand from '../../interfaces/brands';
import api from '../../services/api';

type BrandCardProps = {
  brand: IBrand;
};

type Nativation = {
  navigate: (screen: string, params: any) => void;
};

export function ProductCard({ brand }: BrandCardProps): JSX.Element {
  const { navigate } = useNavigation<Nativation>();

  function handleShowBrandDetail() {
    navigate('Details', { brand });
  }

  return (
    <Container
      style={shadowStyle}
      activeOpacity={0.7}
      onPress={handleShowBrandDetail}
    >
      <BrandImage source={{ uri: brand.image }} />
    </Container>
  );
}
