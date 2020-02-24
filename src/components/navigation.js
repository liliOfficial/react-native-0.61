import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from 'react-native-vector-icons/FontAwesome';

import MoviePage from './movie/movie';
import CharactorList from './charactor/charactor-list/charactorList';
import CharactorDetail from './charactor/charactor-detail/charactorDetail';
import Chart from './chart/chart';
import FavouritePage from './favourite/favourite';

const CharactorNavigator = createStackNavigator({
  'Charactor List': {
    screen: CharactorList,
    navigationOptions: {
      title: 'List',
      header: null
    }
  },
  'Charactor Detail': {
    screen: CharactorDetail,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#202020'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      title: 'Charactor Detail'
    }
  }
});

const AppNavigator = createMaterialBottomTabNavigator(
  {
    CHARACTERS: {
      screen: CharactorNavigator,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name="star" size={20} color={focused ? '#e62429' : '#666'} />,
        tabBarColor: "#202020"
      }
    },
    MOVIES: {
      screen: MoviePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name="film" size={20} color={focused ? '#e62429' : '#666'} />
      }
    },
    FAVOURITE: {
      screen: FavouritePage,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name="star" size={20} color={focused ? '#e62429' : '#666'} />,
      }
    },

    CHART: {
      screen: Chart,
      navigationOptions: {
        tabBarIcon: ({ focused }) => <Icon name="area-chart" size={20} color={focused ? '#e62429' : '#666'} />,
      }
    }
  },
  {
    initialRouteName: 'CHARACTERS',
    labeled: true,
    activeColor: '#e62429',
    inactiveColor: '#666',
    barStyle: { backgroundColor: '#202020' },
  }
);

export default createAppContainer(AppNavigator);