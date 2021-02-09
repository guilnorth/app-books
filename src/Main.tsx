import React from 'react';
import { ThemeProvider, Text, Div } from 'react-native-magnus';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './navigation/AppRoutes';
import { BooksProvider } from './context/BookContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
