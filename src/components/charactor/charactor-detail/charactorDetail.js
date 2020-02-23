import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

import CharactorDetailCard from './charactorDetailCard';

export default function CharactorDetail(props) {
    const { navigation } = props;
    const data = navigation.getParam('data');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            {data.description + '' !== '' && <Text style={styles.description}>{data.description}</Text>}
            <CharactorDetailCard title='Comics' items={data.comics.items} />
            <CharactorDetailCard title='Series' items={data.series.items} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    name: {
        fontSize: 22,
        color: '#e62429',
        fontWeight: '700',
        textAlign: 'center'
    },
    description: {
        marginTop:10,
        fontWeight:'500'
    }

})