import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {
  Dimensions,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HTML from 'react-native-render-html';
import {getNewsByQuery} from '../../client';
import HorizontalList from './HorizontalList';
const {width, height} = Dimensions.get('window');

function NewsDetail(props) {
  const {
    title,
    content,
    description,
    urlToImage,
    url,
  } = props.route.params.item;

  const [releatedNews, setRelatedNews] = useState([]);
  useEffect(() => {
    getNewsByQuery(props.route.params.category)
      .then((result) => {
        if (result) {
          setRelatedNews(result.articles);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const handleClickReadMore = () => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: urlToImage}} />
      <View style={styles.body}>
        <Text style={styles.title}>{title} </Text>
        <View style={styles.content}>
          <Text style={{marginBottom: 20}}>{description}</Text>
          <HTML
            source={{html: content.substring(0, 200)}}
            contentWidth={width}
          />
          <Text style={styles.readMore} onPress={handleClickReadMore}>
            Read more
          </Text>
        </View>
      </View>
      <HorizontalList title={'Related News'} size={21} data={releatedNews} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  image: {
    width: width,
    height: height / 3,
    borderRadius: 10,
  },
  content: {
    fontSize: 14,
    color: 'black',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },

  body: {},
  readMore: {
    fontStyle: 'italic',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default NewsDetail;
