import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TabsRoutes from './TabsRoutes';

const Stack = createStackNavigator();

let Routes;
export default Routes = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Tabs" component={TabsRoutes} />
  </Stack.Navigator>
);
