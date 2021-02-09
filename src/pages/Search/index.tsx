import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Div, Input, Icon } from 'react-native-magnus';
import { BooksContext } from '../../context/BookContext';

export default function Search() {
  const { paramSearch, setParamSearch } = useContext(BooksContext);

  return (
    <Div p={30} style={styles.container} rounded="md" shadow="sm">
      <Input
        placeholder="Username"
        p={10}
        focusBorderColor="blue700"
        returnKeyType="search"
        suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
        onSubmitEditing={() => {
          console.log(paramSearch);
        }}
        onChange={(event) => {
          setParamSearch(event.nativeEvent.text);
        }}
        value={paramSearch}
        clearButtonMode="while-editing"
      />
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
