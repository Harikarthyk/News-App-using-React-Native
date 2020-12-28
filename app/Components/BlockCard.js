import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';

function BlockCard({style, imageStyle, item}) {
  const {title, description, urlToImage} = item;
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, imageStyle]} source={{uri: urlToImage}} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 7,
    height: 300,
    backgroundColor: 'white',
  },
  image: {
    height: 220,
    width: '100%',
  },
  contentContainer: {
    padding: 5,
  },
});

export default BlockCard;
