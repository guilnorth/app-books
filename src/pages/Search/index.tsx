import React from 'react';
import { StyleSheet } from 'react-native';
import {  Text, Div, Input, Icon} from 'react-native-magnus';



export default function Search() {

    return (
        <Div p={30}  style={styles.container} rounded="md" shadow="sm">
            <Input
                placeholder="Username"
                p={10}
                focusBorderColor="blue700"
                returnKeyType='search'
                suffix={<Icon name="search" color="gray900" fontFamily="Feather" />}
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