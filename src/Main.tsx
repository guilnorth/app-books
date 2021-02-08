import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Text, Div } from 'react-native-magnus';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/AppRoutes';



export default function App() {
    return (
        <ThemeProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}