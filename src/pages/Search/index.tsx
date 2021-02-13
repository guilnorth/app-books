import React, { useContext, useMemo, useRef, useState } from 'react';
import { Div, Input, Icon, Button } from 'react-native-magnus';
import { SafeAreaView, Keyboard } from 'react-native';
import LottieView from 'lottie-react-native';
import { BooksContext } from '../../context/BookContext';
import ListBooks from '../../components/ListBooks';
import COLORS from '../../styles/colors';

export default function Search() {
  const { searchBooks, booksSearchList } = useContext(BooksContext);
  const refInput = useRef();

  const handleSearch = (keepList = false) => {
    searchBooks(refInput.current.inputTextValue, keepList);
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Div flex={1} alignItems="center" bg={COLORS.bgPageSearch}>
        <ListBooks
          booksSearchList={booksSearchList.items}
          onEndReached={() => handleSearch(true)}
          listEmptyComponent={() =>
            useMemo(
              () => (
                <LottieView
                  style={{
                    width: 360,
                  }}
                  source={require('../../../assets/books.json')}
                  loop
                  autoPlay
                />
              ),
              []
            )
          }
        />
        <Input
          bg={COLORS.primary}
          style={{ position: 'absolute', bottom: 0 }}
          mb={10}
          mr={10}
          ml={10}
          placeholder="Pesquise pelo livro aqui"
          borderColor="transparent"
          p={10}
          fontSize={16}
          color="white"
          focusBorderColor={COLORS.primary}
          returnKeyType="search"
          suffix={
            <Button
              bg="white"
              h={40}
              w={40}
              rounded="circle"
              onPress={() => {
                handleSearch();
              }}
            >
              <Icon name="search" color="black" fontFamily="Feather" />
            </Button>
          }
          ref={refInput}
          onSubmitEditing={() => {
            handleSearch();
          }}
          onChangeText={(text) => {
            refInput.current.inputTextValue = text;
          }}
          clearButtonMode="while-editing"
        />
      </Div>
    </SafeAreaView>
  );
}
