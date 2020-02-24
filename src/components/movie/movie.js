import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';

import OfferCarousel from '../common/carousel';
import CardScroll from '../common/cardScroll';

import { connect } from 'react-redux';
import { getMovies } from '../../actions';

import moviesList from '../../asset/data/movies.json';

function MoviePage(props) {

  const { movies } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <OfferCarousel />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>LATEST MOVIES</Text>
            <ScrollView horizontal={true}>
              <CardScroll list={movies} />
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
    color: '#202020',
  },
});

const mapStateToProps = state => {
  const { movies } = state.movie;
  return { movies };
}

export default connect(mapStateToProps, { getMovies })(MoviePage);
