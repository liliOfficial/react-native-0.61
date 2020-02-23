import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from './card';

export default function CardScroll(props) {
  const list = [
    {
      id:1,
      background: {
        uri:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manfarfromhome_lob_crd_04_3.jpg',
      },
      name: 'Spider-Man: Far From Home',
      date: '2019',
      isFavourite:true,
    },
    {
      id:2,
      background: {
        uri:
          'https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05_2.jpg',
      },
      name: 'Avengers: Endgame',
      date: '2019',
      isFavourite:false,
    },
  ];
  return (
    <ScrollView horizontal={true} style={{ marginHorizontal: -5 }}>
      {list.map(data => {
        return (
          <View key={data.id}
            style={{
              width: 200,
              marginHorizontal: 5,
              marginTop: 10,
              marginBottom: 15,
            }}>
            <Card data={data}  />
          </View>
        );
      })}
    </ScrollView>
  );
}
