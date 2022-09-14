import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const LoadingContainer = styled.View`
  flex: 1;

  width: 100%;
  justify-content: center;
  align-items: center;
`;

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
  font-size: 14px;
  color: ${({ theme }) => theme.colors.bold};
  text-align: center;
`;
