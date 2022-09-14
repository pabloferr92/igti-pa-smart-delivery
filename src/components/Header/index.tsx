import React from 'react';
import { Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';

import { useTheme } from 'styled-components';
import {
  Container,
  UserAvatar,
  UserAvatarContainer,
  UserProfileButton,
  UserAddressContainer,
  UserAddressMessage,
  UserAddress,
  MoreInformationsButton,
  Content,
} from './styles';
import { SearchInput } from '../SearchInput';

type HeaderProps = {
  scrollInYAnimation: Animated.SharedValue<number>;
};

const HEIGHT = Platform.OS === 'ios' ? 170 : 140;
const HEIGHT_ANIMATED = Platform.OS === 'ios' ? 110 : 80;

export function Header({ scrollInYAnimation }: HeaderProps): JSX.Element {
  const theme = useTheme();

  const animatedHeaderStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollInYAnimation.value,
          [0, HEIGHT],
          [0, -60],
          Extrapolate.CLAMP,
        ),
      },
    ],
    height: interpolate(
      scrollInYAnimation.value,
      [0, HEIGHT],
      [HEIGHT, HEIGHT_ANIMATED],
      Extrapolate.CLAMP,
    ),
    opacity: interpolate(
      scrollInYAnimation.value,
      [0, HEIGHT_ANIMATED, HEIGHT],
      [1, 0, 1],
      Extrapolate.CLAMP,
    ),
    backgroundColor: interpolateColor(
      scrollInYAnimation.value,
      [0, HEIGHT],
      [theme.colors.header, 'rgba(0, 0, 0, 0.01)'],
    ),
  }));

  return (
    <Container style={animatedHeaderStyle}>
      <Content>
        <UserAvatarContainer>
          <UserAvatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/36247444?v=4',
            }}
          />
          <UserProfileButton>
            <MaterialCommunityIcons
              name="menu"
              size={10}
              color={theme.colors.text}
            />
          </UserProfileButton>
        </UserAvatarContainer>

        <MoreInformationsButton>
          <UserAddressContainer>
            <UserAddressMessage>Receber agora em</UserAddressMessage>
            <UserAddress numberOfLines={1}>
              Rua João Lourenço de Araújo, 350, Casa 3
            </UserAddress>
          </UserAddressContainer>
          <MaterialCommunityIcons
            name="chevron-down"
            color={theme.colors.shape}
            size={20}
          />
        </MoreInformationsButton>
      </Content>

      <SearchInput />
    </Container>
  );
}
