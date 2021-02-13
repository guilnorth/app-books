import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-magnus';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import DetailBook from './DetailBook';
import COLORS from '../styles/colors';
import Metrics from '../styles/metrics';

export default function ModalBook({ bookSelected, modalizeRef }: any) {
  const renderHeader = () => (
    <TouchableOpacity
      style={styles.modalHeader}
      onPress={() => {
        modalizeRef.current?.close();
      }}
    >
      <Icon name="close" color="#151515" fontSize={14} />
    </TouchableOpacity>
  );

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        modalTopOffset={100}
        handlePosition="inside"
        HeaderComponent={renderHeader}
        modalStyle={{ backgroundColor: COLORS.white }}
        handleStyle={{
          top: Metrics.defaultSpacing,
          width: 73,
          height: 8,
        }}
      >
        <DetailBook book={bookSelected} />
      </Modalize>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalHeader: {
    position: 'absolute',
    top: Metrics.defaultSpacing,
    right: Metrics.defaultSpacing,
    zIndex: 9000,

    alignItems: 'center',
    justifyContent: 'center',

    width: 30,
    height: 30,

    backgroundColor: 'transparent',
    borderRadius: 15,
  },
});
