import React from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';

import Card from '../common/card';
import ListCard from '../common/listCard';

import { connect } from 'react-redux';
import { getMovies } from '../../actions';

function FavouritePage(props) {

  const { movies } = props;
  const favourite = movies.filter(movie => movie.isFavourite == true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
        <Text style={styles.sectionTitle}>Favourite Movies</Text>
        <Text>Click the star to remove movie from the list</Text>
      </View>
      <ScrollableTabView
        initialPage={0}
        tabBarUnderlineStyle={styles.tabBarUnderline}
        style={styles.scrollableTab}
        tabBarActiveTextColor='#e62429'
        tabBarTextStyle={styles.tabBarText}
        renderTabBar={() => <DefaultTabBar style={styles.tabBar} />}
      >
        <ScrollView tabLabel='Grid View' style={styles.sectionContainer}>
          <View style={styles.list}>
            {favourite.map(data => {
              return (
                <View key={data.id}
                  style={{
                    width: (Dimensions.get("window").width - 30) / 2,
                    marginHorizontal: 5,
                    marginTop: 10,
                    marginBottom: 15,
                  }}>
                  <Card data={data} favouriteButton={true} />
                </View>
              );
            })}
          </View>
        </ScrollView>
        <ScrollView tabLabel='List View'>
          <View>
            {favourite.map(data => {
              return (
                <View key={data.id}
                  style={{
                    width: Dimensions.get("window").width - 10,
                    marginHorizontal: 5,
                    marginTop: 10,
                  }}>
                  <ListCard data={data} favouriteButton={true} />
                </View>
              );
            })}
          </View>
        </ScrollView>
      </ScrollableTabView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 5,
  },
  tabBar: {
    height: 45
  },
  tabBarText: {
    position: 'relative',
    top: 6
  },
  tabBarUnderline: {
    marginTop: 0,
    backgroundColor: '#e62429',
    height: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#202020',
    paddingBottom: 3,
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
