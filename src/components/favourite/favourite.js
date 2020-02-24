import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';

import Card from '../common/card';

import { connect } from 'react-redux';
import { getMovies } from '../../actions';

const { width: viewportWidth } = Dimensions.get('window');

function FavouritePage(props) {

  const { movies } = props;
  const favourite = movies.filter(movie => movie.isFavourite == true);

  // charactors.filter(e => e.name.toLowerCase().includes(keyword.toLowerCase()))


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Favourite Movies</Text>
            <View style={styles.list}>
              {favourite.map((data, index) => {
                return (
                  <View key={data.id}
                    style={{
                      width: (Dimensions.get("window").width - 40) / 2,
                      marginHorizontal: 5,
                      marginTop: 10,
                      marginBottom: 15,
                    }}>
                    <Card data={data} index={index} />
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#202020',
  },
  list: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    flexWrap: 'wrap',
  }
});

const mapStateToProps = state => {
  const { movies } = state.movie;
  return { movies };
}

export default connect(mapStateToProps, { getMovies })(FavouritePage);
