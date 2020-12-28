import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

function FlatCard({item}) {
  const {title, description, urlToImage} = item;
  return (
    <View style={styles.container}>
      <Image source={{uri: urlToImage}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 100,
  },
  image: {flex: 0.35, marginRight: 10, height: '100%'},
  contentContainer: {
    flex: 0.65,
  },
});

export default FlatCard;
