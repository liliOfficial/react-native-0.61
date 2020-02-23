import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CharactorDetailCard(props) {
    const { title, items } = props;
    return (
        <View style={styles.cardContainer}>
            <View style={styles.shadow} />
            <View style={styles.cardBox}>
                <View style={styles.contentBox}>
                    <Text style={styles.title}>{title}</Text>
                    <View>
                        {items.map((item,index) => {
                            return (
                                <Text key={index+item.name.toString()} style={styles.item}>{item.name}</Text>
                            )
                        })}
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        position: 'relative',
        width: '100%',
        marginTop: 15,
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
    contentBox: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#202020'
    },
    item: {
        marginTop: 5,
    }
})