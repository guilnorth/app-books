import React from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Host } from 'react-native-portalize';
import Routes from './navigation/AppRoutes';
import { BooksProvider } from './context/BookContext';

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <BooksProvider>
          <SafeAreaProvider>
            <Host>
              <Routes />
            </Host>
          </SafeAreaProvider>
        </BooksProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
