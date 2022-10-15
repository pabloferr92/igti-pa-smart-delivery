import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';

import {
  Container,
  BackButton,
  Header,
  shadowStyle,
  RefreshButton,
} from './styles';
import { useTheme } from 'styled-components';
import { DefaultScreen } from '../DefaultScreen';
import { SectionTitle } from '../../components/Texts/SectionTitle';
import { ContentContainer } from '../../components/Containeres/ContentConatiner';
import { OrderDetail } from '../../components/OrderDetail';
import { IOrder } from '../../interfaces/order';
import api from '../../services/api';
import { useAuthContext } from '../../context/authContext';
import { Alert } from 'native-base';
import { LoadingComponent } from '../../components/Loading';

export function MyOrders(): JSX.Element {
  const [data, setData] = useState<IOrder[]>([]);

  const [loaded, setLoaded] = useState<Boolean>(false);

  const [executeRefresh, setExecuteRefresh] = useState<number>(0);

  const { user } = useAuthContext();

  useEffect(() => {
    setLoaded(false);
    api
      .get<IOrder[]>(`/orders?user=${user?.id}&_sort=created_at&_order=desc`)
      .then(res => {
        setData(res.data);
        setLoaded(true);
      })
      .catch(err => {
        setLoaded(false);
        Alert('Erro');
      });

    console.log(
      'Data ' +
        JSON.stringify(data) +
        'url ' +
        `/orders?client=${user?.id}&_sort=created_at&_order=desc`,
    );
  }, [executeRefresh]);

  type Nativation = {
    navigate: (screen: string, params: any) => void;
  };

  const theme = useTheme();

  const { goBack } = useNavigation();

  return (
    <DefaultScreen>
      <Container>
        <Header style={shadowStyle}>
          <BackButton onPress={goBack}>
            <Feather
              name="arrow-left"
              color={theme.colors.placeholder}
              size={28}
            />
          </BackButton>
          <SectionTitle>Meus Pedidos</SectionTitle>
          <RefreshButton
            onPress={() => {
              setExecuteRefresh(executeRefresh + 1);
            }}
          >
            <EvilIcons name="refresh" size={40} color="black" />
          </RefreshButton>
        </Header>
        <ContentContainer>
          {loaded ? (
            data.map(element => {
              return (
                <OrderDetail key={element.id} order={element}></OrderDetail>
              );
            })
          ) : (
            <LoadingComponent></LoadingComponent>
          )}
        </ContentContainer>
      </Container>
    </DefaultScreen>
  );
}
