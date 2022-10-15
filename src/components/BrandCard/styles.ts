import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type ProductPriceProps = {
  hasDiscount?: boolean;
};

export const Container = styled.TouchableOpacity`
  height: 210px;
  width: 150px;
  /* border: 1px solid ${({ theme }) => theme.colors.border}; */
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.shape};
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const BrandImage = styled.Image`
  height: 100px;
  width: 100%;
  align-self: center;
  margin-top: 7px;
`;

export const DescriptionText = styled.Text`
  max-width: 95%;
  flex-wrap: wrap;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 5px;
`;

export const ProductPrice = styled.Text<ProductPriceProps>`
  color: ${({ theme }) => theme.colors.bold};
  font-weight: bold;

  ${({ hasDiscount, theme }) =>
    hasDiscount &&
    css`
      color: ${theme.colors.placeholder};
      font-weight: 400;
      text-decoration: line-through;
    `}
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
