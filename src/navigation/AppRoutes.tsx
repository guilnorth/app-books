import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Search from "../pages/Search";


const Stack = createStackNavigator();


let Routes;
export default Routes = () => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Tabs" component={Search} />
        </Stack.Navigator>
    );
}