import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const SacolaText = styled.Text`
  margin: auto;
  font-size: 30px;
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

export const AddToCartButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0 20px;

  height: 50px;
  width: 100%;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.primary};

  margin-bottom: 15px;
`;

export const AddToCartButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.bold};
  text-align: center;
`;

export const TotalPriceText = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.bold};
  margin-bottom: 10px;
  text-align: center;
`;
