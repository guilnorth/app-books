import React, { useContext } from 'react';
import { Text, Div, Button, Image, Icon } from 'react-native-magnus';
import { BooksContext } from '../context/BookContext';

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
    <Div p={15}>
      <Div flexDir="row" mt={15} alignItems="center">
        <Image
          rounded={1}
          h={100}
          w={100}
          resizeMode="contain"
          source={{
            uri: book?.volumeInfo?.imageLinks?.smallThumbnail,
          }}
        />
        <Text
          color="white"
          fontSize="xl"
          fontWeight="bold"
          mr={100}
          ml={10}
          style={{ flexWrap: 'wrap' }}
        >
          {book?.volumeInfo?.title}
        </Text>
      </Div>
      <Div mt={20}>
        <Button
          fontWeight="bold"
          onPress={onHandleFavoriteButton}
          mt="lg"
          ml="md"
          px="xl"
          py="lg"
          bg="yellow500"
          rounded="circle"
          color="white"
          shadow={2}
          prefix={
            <Icon
              name={favorite ? 'heart' : 'heart-outline'}
              fontSize={16}
              color="white"
              fontFamily="MaterialCommunityIcons"
              mr={10}
            />
          }
        >
          {favorite ? 'Favorito' : 'Salvar nos Favoritos'}
        </Button>
      </Div>
      <Div>
        <Text mt={10} color="white" fontSize="xl" fontWeight="400">
          Por:{' '}
          {book?.volumeInfo?.authors
            ? book?.volumeInfo?.authors.join(', ')
            : 'Sem informação de autores'}
        </Text>
      </Div>
      <Div>
        <Text
          fontSize="lg"
          fontWeight="bold"
          textTransform="uppercase"
          color="red400"
          letterSpacing={2}
          mt="lg"
        >
          Descrição
        </Text>
        <Text mt={10} color="white" fontSize="xl" fontWeight="bold">
          {book?.volumeInfo?.description
            ? book?.volumeInfo?.description
            : 'Este livro não tem descrição :/'}
        </Text>
      </Div>
    </Div>
  );
}
