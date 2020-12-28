import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchInput} placeholder="Search here ... " />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  searchInput: {
    fontSize: 15,
    width: '100%',
    height: '100%',
    paddingLeft: 10,
  },
});

export default SearchBar;
