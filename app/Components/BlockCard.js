import React from 'react';
import {Image, StyleSheet, Dimensions, View} from 'react-native';
import Subtitle from './Subtitle';
import Title from './Title';
import ViewMore from './ViewMore';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

function BlockCard({style, imageStyle, item, size, category}) {
  const {title, description, urlToImage} = item;

  const navigation = useNavigation();
  if (item.type) {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NewsList', {category: item.category})
        }>
        <ViewMore style={styles.viewMore} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('News Detail', {item: item, category: category})
      }>
      <View style={[styles.container, style]}>
        <Image style={[styles.image, imageStyle]} source={{uri: urlToImage}} />
        <View style={styles.contentContainer}>
          <Title size={size}>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </View>
      </View>
    </TouchableOpacity>
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
