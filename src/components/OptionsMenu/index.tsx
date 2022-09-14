import React from 'react';

import { Container, OptionButton, OptionButtonText } from './styles';

import BeerIcon from '../../assets/icons/beer.svg';
import Distilled from '../../assets/icons/distilled.svg';
import WineIcon from '../../assets/icons/wine.svg';
import JuiceIcon from '../../assets/icons/juice.svg';
import OthersIcon from '../../assets/icons/others.svg';
import ChipsIcon from '../../assets/icons/chips.svg';
import { useNavigation } from '@react-navigation/native';

export function OptionsMenu(): JSX.Element {
  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const { navigate } = useNavigation<Nativation>();

  return (
    <Container>
      <OptionButton
        onPress={() => {
          navigate('ProductBrandList', {});
        }}
      >
        <BeerIcon width={25} height={25} />
        <OptionButtonText>Cervejas</OptionButtonText>
      </OptionButton>

      <OptionButton>
        <Distilled width={25} height={25} />
        <OptionButtonText>Destilados</OptionButtonText>
      </OptionButton>

      <OptionButton>
        <WineIcon width={25} height={25} />
        <OptionButtonText>Vinhos</OptionButtonText>
      </OptionButton>

      <OptionButton>
        <JuiceIcon width={25} height={25} />
        <OptionButtonText>Sem Álcool</OptionButtonText>
      </OptionButton>

      <OptionButton>
        <OthersIcon width={25} height={25} />
        <OptionButtonText>Lojinha</OptionButtonText>
      </OptionButton>

      <OptionButton>
        <ChipsIcon width={25} height={25} />
        <OptionButtonText>Comidinhas</OptionButtonText>
      </OptionButton>
    </Container>
  );
}
