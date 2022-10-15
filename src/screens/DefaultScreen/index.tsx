import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Header } from '../../components/Header';
import { Container } from './styles';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { ActivityIndicator } from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export function DefaultScreen({ children }: Props): JSX.Element {
  const scrollInYAnimation = useSharedValue(0);

  const scrollInYHandler = useAnimatedScrollHandler(event => {
    scrollInYAnimation.value = event.contentOffset.y;
  });
  return (
    <Container>
      <Header scrollInYAnimation={scrollInYAnimation}></Header>
      {children}
    </Container>
  );
}
