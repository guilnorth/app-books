import React from 'react';
import { render } from '@testing-library/react-native';
import { BooksProvider, BooksContext } from '../context/BookContext';

const renderWithContext = (component: any) => ({
  ...render(<BooksProvider value={BooksContext}>{component}</BooksProvider>),
});

export { BooksProvider, renderWithContext };
