import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ProductPriceProps = {
  hasDiscount?: boolean;
};

export const Container = styled.TouchableOpacity`
  height: 200;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;
  margin-top: 15px;
  padding: 15px;
`;

export const ProductDescriptionText = styled.Text`
  font-size: 25px;
  text-align: center;
`;
export const ProductGeneralText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const ProductImage = styled.Image`
  margin-top: 5px;
  padding: 5px;
  width: 44px;
  height: 80px;
  max-height: 100px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;
