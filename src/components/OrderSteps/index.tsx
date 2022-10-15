import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import React from 'react';
import { View } from 'native-base';
import { Text } from 'react-native';
import { IOrder } from '../../interfaces/order';
import { or } from 'react-native-reanimated';

type props = {
  order: IOrder;
};

export function OrderSteps({ order }: props): JSX.Element {
  const handleActiveStep = (order: IOrder) => {
    if (order.state == 'submited') return 0;

    if (order.state == 'separacao') return 1;

    if (order.state == 'encaminhado') return 2;

    if (order.state == 'concluido') return 3;
  };

  return (
    <>
      <ProgressSteps activeStep={handleActiveStep(order)}>
        <ProgressStep
          nextBtnDisabled={true}
          removeBtnRow={true}
          label="Recebido"
        >
          <View style={{ alignItems: 'center' }}></View>
        </ProgressStep>
        <ProgressStep
          label="Em separação"
          nextBtnDisabled={true}
          removeBtnRow={true}
        >
          <View style={{ alignItems: 'center' }}></View>
        </ProgressStep>
        <ProgressStep
          label="Enviado"
          nextBtnDisabled={true}
          removeBtnRow={true}
        >
          <View style={{ alignItems: 'center' }}></View>
        </ProgressStep>
        <ProgressStep
          label="Entregue"
          nextBtnDisabled={true}
          removeBtnRow={true}
        >
          <View style={{ alignItems: 'center' }}></View>
        </ProgressStep>
      </ProgressSteps>
    </>
  );
}
