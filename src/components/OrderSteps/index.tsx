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
    if (order.state.value == '1') return 0;

    if (order.state.value == '2') return 1;

    if (order.state.value == '3') return 2;

    if (order.state.value == '4') return 3;
  };

  return (
    <>
      <ProgressSteps activeStep={handleActiveStep(order)}>
        <ProgressStep
          nextBtnDisabled={true}
          removeBtnRow={true}
          label="Solicitado"
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
