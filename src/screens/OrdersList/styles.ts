import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BrandsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`;

export const LoadingContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CategoryText = styled.Text`
  margin: auto;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.section_title};
`;

export const LoadgingText = styled.Text`
  margin: auto;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.section_title};
`;

export const ItensContainer = styled.ScrollView`
  flex: 1;
  /* background-color: blue; */
  margin: 15px;
  box-shadow: 10px 5px 5px black;
`;

export const BackButton = styled.TouchableOpacity`
  /* margin: auto; */
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  z-index: 4;
  padding: 10px;
  margin-top : 10px
  padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + 15 : 15}px;
  /* justify-content: flex-start; */
  background-color: lack;
  /* margin-bottom: 10px; */
`;

export const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};
