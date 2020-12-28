import React from 'react';
import {FlatList, View} from 'react-native';
import SmallCard from './SmallCard';
import Title from './Title';

function HorizontalList({title, data}) {
  return (
    <View style={{marginVertical: 10}}>
      <View style={{marginVertical: 10}}>
        <Title size={20}>{title}</Title>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <SmallCard item={item} />}
      />
    </View>
  );
}

export default HorizontalList;
