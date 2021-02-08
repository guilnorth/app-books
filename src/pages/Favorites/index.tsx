import React from 'react';
import { StyleSheet } from 'react-native';
import {  Text, Div } from 'react-native-magnus';


export default function Favorites() {
    return (
        <Div p={30}  style={styles.container} rounded="md" shadow="sm">
            <Text  color="purple500">Favorites</Text>
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