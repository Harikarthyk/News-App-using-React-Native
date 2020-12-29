import React from 'react';
import {StyleSheet, View} from 'react-native';
import FlatCard from './FlatCard';
// import Title from './Title';

function VerticalList({title, data}) {
  return (
    <View style={styles.container}>
      {/* <View style={[{marginBottom: 10}]}>
        <Title size={26}>{title}</Title>
      </View> */}
      {data.map((item, index) => (
        <FlatCard category={title} item={item} key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginBottom: 20,
  },
});

export default VerticalList;
