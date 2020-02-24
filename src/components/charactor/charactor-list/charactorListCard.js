import React from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

export default function CharactorListCard(props) {
    const { data, navigation } = props;
    return (
        <TouchableHighlight onPress={() => navigation.navigate('Charactor Detail', { data: data })}>
            <View style={styles.cardContainer}>
                <View style={styles.shadow} />
                <View style={styles.cardBox}>
                    <View style={styles.contentBox}>
                        <Text style={styles.name}>{data.name}</Text>
                        {data.description + '' !== '' && <Text style={styles.subTitle}>{data.description}</Text>}
                    </View>
                </View>
            </View>
        </TouchableHighlight>

    )
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '100%',
        marginBottom: 15,
    },
    cardBox: {
        borderRadius: 4,
        overflow: 'hidden',
    },
    shadow: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 0,
        left: 0,
        width: '100%',
        bottom: -8,
        shadowColor: '#D8D8D8',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        borderRadius: 5
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
        color: '#e62429'
    },
    contentBox: {
        paddingHorizontal: 10
    }
})