import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { CartItens } from '../screens/CartItens';
import { ProductBrandList } from '../screens/ProductBrandList';
import { ProductList } from '../screens/ProductList';
import { MyOrders } from '../screens/MyOrders';

const { Screen, Navigator } = createStackNavigator();

export function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="CartItens" component={CartItens} />
        <Screen name="ProductBrandList" component={ProductBrandList} />
        <Screen name="ProductList" component={ProductList} />
        <Screen name="MyOrders" component={MyOrders} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
