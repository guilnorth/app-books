import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import ListBooks from '../../components/ListBooks';
import { BooksContext } from '../../context/BookContext';

export default function Favorites() {
  const { favoritesBooks } = useContext(BooksContext);

  const headerComponent = () => (
    <Text fontWeight="bold" fontSize="4xl" textAlign="center" color="white">
      Meus Favoritos
    </Text>
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div bg="blue700" style={styles.container}>
        <ListBooks
          booksSearchList={favoritesBooks}
          headerComponent={headerComponent}
        />
      </Div>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
