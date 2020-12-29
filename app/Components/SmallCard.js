import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import BlockCard from './BlockCard';
import ViewMore from './ViewMore';

const {width} = Dimensions.get('window');

function SmallCard({item, category}) {
  const navigation = useNavigation();
  if (item.type) {
    return (
      <TouchableOpacity
        style={styles.viewMore}
        onPress={() =>
          navigation.navigate('NewsList', {category: item.category})
        }>
        <ViewMore style={styles.viewMore} />
      </TouchableOpacity>
    );
  }
  return (
    <BlockCard
      item={item}
      style={styles.container}
      category={category}
      imageStyle={styles.image}
    />
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
