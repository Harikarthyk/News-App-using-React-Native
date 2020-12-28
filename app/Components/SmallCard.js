import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import BlockCard from './BlockCard';
import ViewMore from './ViewMore';

const {width} = Dimensions.get('window');

function SmallCard({item}) {
  if (item.type) {
    return <ViewMore style={styles.viewMore} />;
  }
  return (
    <BlockCard item={item} style={styles.container} imageStyle={styles.image} />
  );
}

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 120,
  },
  viewMore: {
    width: width / 2,
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SmallCard;
