import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardBook from './CardBook';
import ModalBook from './ModalBook';

export default function ListBooks({ booksSearchList }: Array<any>) {
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
        }}
        keyExtractor={(item) => item.id}
        data={booksSearchList}
        renderItem={({ item }) => (
          <CardBook
            book={item}
            key={item.id}
            press={() => {
              setBookSelected(item);
              onOpen();
            }}
          />
        )}
      />
    </>
  );
}
