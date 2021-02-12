import React, { useRef, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardBook from './CardBook';
import ModalBook from './ModalBook';

export default function ListBooks({
  booksSearchList,
  onEndReached,
  headerComponent,
  listEmptyComponent,
}: Array<any>) {
  const [bookSelected, setBookSelected] = useState({});
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <ModalBook bookSelected={bookSelected} modalizeRef={modalizeRef} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginTop: 60,
          paddingBottom: 150,
          flexGrow: 1,
        }}
        keyExtractor={(item) => item.etag}
        data={booksSearchList}
        renderItem={({ item }) => (
          <CardBook
            book={item}
            key={item.etag}
            press={() => {
              setBookSelected(item);
              onOpen();
            }}
          />
        )}
        onEndReached={() => {
          if (onEndReached) onEndReached();
        }}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={headerComponent}
        ListEmptyComponent={listEmptyComponent}
      />
    </>
  );
}
