import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';
import ViewMore from './ViewMore';

const {width} = Dimensions.get('window');

function BlockCard({style, imageStyle, item, size}) {
  const {title, description, urlToImage} = item;

  if (item.type) {
    return <ViewMore style={styles.viewMore} />;
  }
  return (
    <View style={[styles.container, style]}>
      <Image style={[styles.image, imageStyle]} source={{uri: urlToImage}} />
      <View style={styles.contentContainer}>
        <Title size={size}>{title}</Title>
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
  viewMore: {
    width: width / 2,
    borderRadius: 7,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default BlockCard;
