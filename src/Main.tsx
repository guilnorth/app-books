import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routes from './navigation/AppRoutes';
import { BooksProvider } from './context/BookContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BooksProvider>
          <SafeAreaProvider>
            <Routes />
          </SafeAreaProvider>
        </BooksProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
