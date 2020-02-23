import React from 'react';
import {SafeAreaView,ScrollView, Text, View, StyleSheet} from 'react-native';

import OfferCarousel from '../common/carousel';
import CardScroll from '../common/cardScroll';

export default function MoviePage(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <OfferCarousel />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>LATEST MOVIES</Text>
            <ScrollView horizontal={true}>
              <CardScroll />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color:'#202020',
  },
});
