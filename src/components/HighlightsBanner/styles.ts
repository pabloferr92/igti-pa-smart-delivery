import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  padding: 20px 0;
`;

export const BannerImagesWrapper = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width}px;
  justify-content: center;
  align-items: center;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: ${RFValue(268)}px;
`;

export const IndexesContainer = styled.View`
  width: 100%;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  margin-top: 24px;
`;
