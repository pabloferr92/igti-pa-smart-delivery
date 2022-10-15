import styled from 'styled-components/native';

const OrderCol = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const OrderTitle = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const OrderContent = styled.View`
  border-radius: 15px;
  border: solid;
  /* border-color: ${({ theme }) => theme.colors.primary}; */
  padding: 5px;
  width: 100%;
`;

const OrderTexts = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UpperRow = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Col = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { OrderCol, OrderTitle, OrderTexts, Row, Col, OrderContent, UpperRow };
