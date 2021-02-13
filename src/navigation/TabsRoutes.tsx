import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../pages/Search';
import Favorites from '../pages/Favorites';
import COLORS from '../styles/colors';

const Tab = createBottomTabNavigator();

let TabsRoutes;
export default TabsRoutes = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgPage }}>
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          borderTopWidth: 0,
          shadowRadius: 0,
          backgroundColor: COLORS.bgTabBar,
        },
        activeTintColor: '#B396F4',
        inactiveTintColor: '#FFF',
        showLabel: false,
      }}
    >
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
  </SafeAreaView>
);
