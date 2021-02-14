import React, { useContext } from 'react';
import { Keyboard } from 'react-native';
import { Button, Div, Icon, Input, Text } from 'react-native-magnus';
import COLORS from '../styles/colors';
import Metrics from '../styles/metrics';
import { BooksContext } from '../context/BookContext';

export default function HeaderSearch() {
  const { searchBooks, term, setTerm } = useContext(BooksContext);
  const handleSearch = (keepList = false) => {
    searchBooks(keepList);
    Keyboard.dismiss();
  };
  return (
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
        testID="inputSearch"
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
            testID="submitSearch"
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
        onSubmitEditing={() => {
          handleSearch();
        }}
        value={term}
        onChangeText={(text) => {
          setTerm(text);
        }}
        clearButtonMode="while-editing"
      />
    </Div>
  );
}
