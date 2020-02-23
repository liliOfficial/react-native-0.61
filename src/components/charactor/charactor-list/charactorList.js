import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TouchableHighlight, Text, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { SearchInput } from './searchInput';
import CharactorListCard from './charactorListCard';
import axios from 'axios';

import MarvelParams from '../../../service/marvelKey';

export default function CharactorList(props) {
    const [searchInputShow, setSearchInputShow] = useState(false);
    const [charactors, setCharactors] = useState(null);
    const [keyword, setKeyword] = useState('');

    const fetchData = async () => {
        const marvelKey = MarvelParams();

        result = await axios(`https://gateway.marvel.com/v1/public/characters?${marvelKey}&limit=100`);
        
        // console.log(result.data.data);
        setCharactors(result.data.data.results);

    }

    useEffect(() => {
        fetchData();
    }, []);

    const {navigation} = props;

    return (
        <SafeAreaView style={{ backgroundColor: '#202020' }}>
            <View style={styles.container}>
                <Text style={styles.title}>CHARACTERS</Text>
                <TouchableHighlight onPress={() => setSearchInputShow(!searchInputShow)} underlayColor="transparent">
                    <View>
                        {!searchInputShow &&
                            <Icon name="search" size={22} color="#fff" style={styles.search} />}
                        {searchInputShow &&
                            <Icon name="times" size={22} color="#fff" style={styles.search} />}
                    </View>
                </TouchableHighlight>
            </View>
            {searchInputShow &&
                <SearchInput placeholder="search" onChangeText={(keyword) => {
                    setKeyword(keyword);
                }} />
            }

            {!charactors &&
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#202020" />
                </View>
            }
            {charactors &&
                <ScrollView style={styles.scrollList}>
                    {(keyword ? charactors.filter(e => e.name.toLowerCase().includes(keyword.toLowerCase())) : charactors).map(charactor => {
                        return (
                            <CharactorListCard key={charactor.id} data={charactor} navigation={navigation}/>
                        )
                    })}
                    <Text style={{height:80}}></Text>
                </ScrollView>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#202020',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingLeft: 10,
        paddingRight: 12,
        marginBottom: 10

    },
    title: {
        paddingTop: 12,
        marginBottom: 10,
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 300,
        backgroundColor: '#fff',
    },
    scrollList: {
        backgroundColor: '#fff',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    }
});
