import React from 'react';
import { IOrder } from '../../interfaces/order';
import { OrderSteps } from '../OrderSteps';
import {
  OrderCol,
  OrderTexts,
  OrderTitle,
  Row,
  Col,
  OrderContent,
  UpperRow,
} from './style';

type props = {
  order: IOrder;
};

export function OrderDetail({ order }: props): JSX.Element {
  const mock_order = {
    state: 'concluido',
    order: 1,
    created_at: '2022-09-25T01:39:49.904Z',
    client: '',
    id: 1,
  };

  return (
    <>
      <OrderCol>
        <UpperRow>
          <OrderContent>
            <OrderTitle>Pedido Nº {order.id}</OrderTitle>
            <OrderTexts>
              Criado em: {new Date(order.created_at).toLocaleString()}
            </OrderTexts>
          </OrderContent>
        </UpperRow>
        <Row>
          <OrderSteps order={order}></OrderSteps>
        </Row>
      </OrderCol>
    </>
  );
}
