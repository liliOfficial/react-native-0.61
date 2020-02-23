import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';


export const SearchInput = ({ placeholder, onChangeText }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={(keywords) => onChangeText(keywords)}
                />
        </View>
    )
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    input: {
        height: 45,
        fontSize: 20,
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        borderRadius: 4,
        paddingLeft: 20
    },
    searchBoard: {
        padding: 10,
        overflow: 'hidden'
    }
});
