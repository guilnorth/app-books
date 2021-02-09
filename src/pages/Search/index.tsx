import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Text, Div, Input, Icon } from 'react-native-magnus';
import { BooksContext } from '../../context/BookContext';
import CardBook from '../../components/CardBook';

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
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 50,
          }}
          data={booksSearchList.items}
          renderItem={({ item }) => <CardBook book={item} key={item.id} />}
        />
      </Div>
      <Div p={10} pt={15} style={styles.container} shadow="sm">
        <Input
          mb={10}
          placeholder="Username"
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
