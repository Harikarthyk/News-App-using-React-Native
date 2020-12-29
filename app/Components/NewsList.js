import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {set} from 'react-native-reanimated';
import {getHeadLines, getNewsByCategory} from '../../client';
import VerticalList from './VerticalList';

function NewsList(props) {
  const category = props.route.params.category;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (category === 'headlines') {
      getHeadLines()
        .then((result) => {
          if (result) {
            setData(result.articles);
          }
          return;
        })
        .catch((error) => console.error(error));
      return;
    }
    getNewsByCategory(category)
      .then((result) => {
        if (result) setData(result.articles);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <VerticalList title={category} data={data} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 10,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default NewsList;
