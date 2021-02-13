import React, { useContext, useMemo, useRef } from 'react';
import { Div, Input, Icon, Button, Text } from 'react-native-magnus';
import { Keyboard } from 'react-native';
import LottieView from 'lottie-react-native';
import { BooksContext } from '../../context/BookContext';
import ListBooks from '../../components/ListBooks';
import COLORS from '../../styles/colors';
import Metrics from '../../styles/metrics';

export default function Search() {
  const { searchBooks, booksSearchList } = useContext(BooksContext);
  const refInput = useRef();

  const handleSearch = (keepList = false) => {
    console.log(refInput.current.inputTextValue);
    searchBooks(refInput.current.inputTextValue, keepList);
    Keyboard.dismiss();
  };

  return (
    <Div bg={COLORS.bgPage}>
      <Div mb={20} alignSelf="flex-start" mx={Metrics.mediumSpacing} mt={20}>
        <Text
          fontWeight="bold"
          fontSize={28}
          textAlign="left"
          color="white"
          lineHeight={32}
          mb={4}
        >
          Busca
        </Text>
        <Div
          style={{
            borderBottomColor: COLORS.white,
            borderBottomWidth: 1,
            width: 40,
          }}
        />

        <Input
          mt={40}
          bg={COLORS.bgPage}
          style={{ width: '100%' }}
          placeholder="Pesquise pelo livro aqui"
          borderColor={COLORS.white}
          fontSize={16}
          color="white"
          focusBorderColor={COLORS.white}
          returnKeyType="search"
          suffix={
            <Button
              bg="transparent"
              h={40}
              w={40}
              rounded="circle"
              onPress={() => {
                handleSearch();
              }}
            >
              <Icon name="search" color="white" fontFamily="Feather" />
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
      <Div>
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
          paddingBottom={450}
        />
      </Div>
    </Div>
  );
}
