import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';
import BlockCard from './BlockCard';
import SmallCard from './SmallCard';
import Title from './Title';

const {width} = Dimensions.get('window');
function HorizontalList({title, data, size}) {
  return (
    <View style={{marginVertical: 10}}>
      <View style={{marginVertical: 10}}>
        <Title size={size}>{title}</Title>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return title === 'Top Headlines' ? (
            <BlockCard
              size={20}
              category={title}
              style={{marginRight: 10, width: width - 45}}
              item={item}
            />
          ) : (
            <SmallCard category={title} item={item} />
          );
        }}
      />
    </View>
  );
}

export default HorizontalList;
