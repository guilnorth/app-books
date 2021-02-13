import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Div, Text } from 'react-native-magnus';
import ListBooks from '../../components/ListBooks';
import { BooksContext } from '../../context/BookContext';
import COLORS from '../../styles/colors';

export default function Favorites() {
  const { favoritesBooks } = useContext(BooksContext);

  const HeaderComponent = () => (
    <Div mb={60} alignSelf="flex-start">
      <Text
        fontWeight="bold"
        fontSize={28}
        textAlign="left"
        color="white"
        lineHeight={32}
        mb={4}
      >
        Meus Favoritos
      </Text>
      <Div
        style={{ borderBottomColor: 'white', borderBottomWidth: 1, width: 120 }}
      />
    </Div>
  );
  return (
    <Div style={styles.container} bg={COLORS.bgPage}>
      <ListBooks
        booksSearchList={favoritesBooks}
        headerComponent={HeaderComponent}
      />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
