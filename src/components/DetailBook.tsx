import React, { useContext } from 'react';
import { Text, Div, Button, Image, Icon } from 'react-native-magnus';
import { BooksContext } from '../context/BookContext';
import COLORS from '../styles/colors';
import Globals from '../styles/globals';
import Metrics from '../styles/metrics';

export default function DetailBook({ book }: any) {
  const {
    addBookFavoriteList,
    removeBookFavoriteList,
    checkIsBookFavorite,
  } = useContext(BooksContext);

  const favorite = book.isFavoriteBook_APP || checkIsBookFavorite(book.id);

  const onHandleFavoriteButton = () => {
    if (favorite) {
      book.isFavoriteBook_APP = false;
      removeBookFavoriteList(book);
    } else {
      addBookFavoriteList(book);
    }
  };

  return (
    <Div pt={100} mx={45}>
      <Div flexDir="row" mt={15} alignItems="center">
        <Image
          h={141}
          w={100}
          style={{ borderColor: COLORS.detailPrimary, borderWidth: 1 }}
          resizeMode="contain"
          source={{
            uri: book?.volumeInfo?.imageLinks?.smallThumbnail,
          }}
        />
        <Div flex={1} flexDir="column" ml={Metrics.defaultSpacing}>
          <Text style={Globals.titleBook}>{book?.volumeInfo?.title}</Text>
          <Text
            mt={8}
            color={COLORS.authorCardBlack}
            fontSize={16}
            fontWeight="400"
          >
            {book?.volumeInfo?.authors
              ? book?.volumeInfo?.authors.join(', ')
              : ''}
          </Text>
          <Button
            bg="purple100"
            h={40}
            w={40}
            mt={35}
            rounded="circle"
            onPress={onHandleFavoriteButton}
          >
            <Icon
              fontSize={16}
              name={favorite ? 'heart' : 'hearto'}
              color={COLORS.detailPrimary}
            />
          </Button>
        </Div>
      </Div>

      <Div>
        <Text mt={32} style={Globals.decriptionBookDetail}>
          {book?.volumeInfo?.description
            ? book?.volumeInfo?.description
            : 'Este livro não tem descrição :/'}
        </Text>
      </Div>
    </Div>
  );
}
