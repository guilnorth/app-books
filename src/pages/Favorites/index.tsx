import React from 'react';
import { StyleSheet } from 'react-native';
import { Div } from 'react-native-magnus';
import CardBook from '../../components/CardBook';

export default function Favorites() {
  return (
    <Div p="2xl" py="3xl" bg="gray200" style={styles.container}>
      <CardBook book={{ volumeInfo: { title: 'Favorite 1' } }} />
      <CardBook book={{ volumeInfo: { title: 'Favorite 2' } }} />
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
