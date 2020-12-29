import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import VerticalList from './VerticalList';

const {height} = Dimensions.get('window');

function SearchModel({data, visible, query}) {
  if (!visible) return null;
  if (visible && data.length === 0)
    return (
      <View style={styles.container}>
        <Text
          style={{
            textAlign: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            color: 'white',
            fontSize: 20,
          }}>
          No result found
        </Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <ScrollView>
        <VerticalList data={data} title={query} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    height: height / 2.2,
    width: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(92,90,91,0.7)',
    padding: 10,
    borderRadius: 10,
  },
});

export default SearchModel;
