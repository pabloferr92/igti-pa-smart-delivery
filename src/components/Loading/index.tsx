import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ActivityIndicator } from 'react-native';
import { ContentContainer } from './styles';

export function LoadingComponent(): JSX.Element {
  return (
    <>
      <ActivityIndicator size="large" color="#00ff00" />
    </>
  );
}
