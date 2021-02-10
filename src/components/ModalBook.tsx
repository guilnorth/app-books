import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-magnus';
import { Modalize } from 'react-native-modalize';
import DetailBook from './DetailBook';

export default function ModalBook({ bookSelected, modalizeRef }: any) {
  const renderHeader = () => (
    <TouchableOpacity
      style={styles.modalHeader}
      onPress={() => {
        modalizeRef.current?.close();
      }}
    >
      <Icon name="close" />
    </TouchableOpacity>
  );

  return (
    <Modalize
      ref={modalizeRef}
      modalTopOffset={100}
      handlePosition="inside"
      HeaderComponent={renderHeader}
    >
      <DetailBook book={bookSelected} />
    </Modalize>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    position: 'absolute',
    top: -10,
    right: 10,
    zIndex: 9000,

    alignItems: 'center',
    justifyContent: 'center',

    width: 30,
    height: 30,

    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 15,
  },
});
