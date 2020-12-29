import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Subtitle from './Subtitle';
import {useNavigation} from '@react-navigation/native';
import Title from './Title';

function FlatCard({item, category}) {
  const {title, description, urlToImage} = item;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('News Detail', {item: item, category: category})
      }>
      <View style={styles.container}>
        <Image source={{uri: urlToImage}} style={styles.image} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{description}</Subtitle>
        </View>
      </View>
    </TouchableOpacity>
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
