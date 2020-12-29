import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const {width, height} = Dimensions.get('window');

function NewsDetail({data}) {
  //   const {title, content, urlToImage, source, url} = data;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={require('../assests/test.jpg')} />
      <View style={styles.body}>
        <Text style={styles.title}>This is Title View </Text>
        <Text style={styles.content}>
          THis is Content . When an app communicates with servers using a
          cleartext network traffic, such as HTTP, it could raise a risk of
          eavesdropping and tampering of content. Third parties can inject
          unauthorized data or leak information about the users. That is why
          developers are encouraged to a secure traffic only, such as HTTPS.
          When an app communicates with servers using a cleartext network
          traffic, such as HTTP, it could raise a risk of eavesdropping and
          tampering of content. Third parties can inject unauthorized data or
          leak information about the users. That is why developers are
          encouraged to a secure traffic only, such as HTTPS.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  content: {
    fontSize: 14,
    color: 'grey',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  body: {
    padding: 8,
  },
});

export default NewsDetail;
