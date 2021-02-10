import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Div } from 'react-native-magnus';
import ListBooks from '../../components/ListBooks';
import { BooksContext } from '../../context/BookContext';

export default function Favorites() {
  const { favoritesBooks } = useContext(BooksContext);

  return (
    <Div bg="gray200" style={styles.container}>
      <ListBooks booksSearchList={favoritesBooks} />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
