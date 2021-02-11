import React, { useContext } from 'react';
import { Div, Input, Icon } from 'react-native-magnus';
import { BooksContext } from '../../context/BookContext';
import ListBooks from '../../components/ListBooks';

export default function Search() {
  const {
    paramSearch,
    setParamSearch,
    searchBooks,
    booksSearchList,
  } = useContext(BooksContext);

  return (
    <>
      <Div style={{ flex: 1 }} alignItems="center" bg="indigo800">
        <ListBooks booksSearchList={booksSearchList.items} />
        <Input
          style={{ position: 'absolute', bottom: 0 }}
          mb={10}
          mr={10}
          ml={10}
          placeholder="Pesquise pelo livro aqui"
          p={10}
          focusBorderColor="blue700"
          returnKeyType="search"
          suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
          onSubmitEditing={() => {
            searchBooks();
          }}
          onChange={(event) => {
            setParamSearch(event.nativeEvent.text);
          }}
          value={paramSearch}
          clearButtonMode="while-editing"
        />
      </Div>
    </>
  );
}
