import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let TabsRoutes;
export default TabsRoutes = () => (
  <Tab.Navigator initialRouteName="Search">
    <Tab.Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarLabel: 'Buscar',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="book-search"
            color={color}
            size={size}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
