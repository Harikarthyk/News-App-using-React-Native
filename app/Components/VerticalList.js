import React from 'react';
import {StyleSheet, View} from 'react-native';
import FlatCard from './FlatCard';
import Title from './Title';

function VerticalList({title, data}) {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 10}}>
        <Title size={20}>{title}</Title>
      </View>
      {data.map((item, index) => (
        <FlatCard item={item} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginBottom: 50,
  },
});

export default VerticalList;
