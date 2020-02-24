import React from 'react';
import { ScrollView, View } from 'react-native';
import Card from './card';

export default function CardScroll(props) {
  const list = props.list;
  return (
    <ScrollView horizontal={true} style={{ marginHorizontal: -5 }}>
      {list.map(data => {
        return (
          <View key={data.id}
            style={{
              width: 150,
              marginHorizontal: 5,
              marginTop: 10,
              marginBottom: 15,
            }}>
            <Card data={data} favouriteButton={true} />
          </View>
        );
      })}
    </ScrollView>
  );
}
