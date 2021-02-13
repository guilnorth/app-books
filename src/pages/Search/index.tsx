import React, { useContext } from 'react';
import { Div } from 'react-native-magnus';
import { Keyboard } from 'react-native';
import LottieView from 'lottie-react-native';
import { BooksContext } from '../../context/BookContext';
import ListBooks from '../../components/ListBooks';
import COLORS from '../../styles/colors';
import HeaderSearch from '../../components/HeaderSearch';

export default function Search() {
  const { searchBooks, booksSearchList, term } = useContext(BooksContext);

  const handleSearch = () => {
    searchBooks(term, true);
    Keyboard.dismiss();
  };

  return (
    <Div bg={COLORS.bgPage} flex={1}>
      <HeaderSearch />

      <ListBooks
        booksSearchList={booksSearchList.items}
        onEndReached={() => handleSearch()}
        listEmptyComponent={
          <LottieView
            style={{
              width: 360,
            }}
            source={require('../../../assets/books.json')}
            loop
            autoPlay
          />
        }
        paddingBottom={450}
      />
    </Div>
  );
}
