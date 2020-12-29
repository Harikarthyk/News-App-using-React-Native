import React from 'react';
import {StyleSheet, StatusBar, ScrollView} from 'react-native';

function Screen({children, isSearchFocused}) {
  return (
    <ScrollView scrollEnabled={!isSearchFocused} style={styles.container}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 16,
    backgroundColor: '#ECECEC',
    flex: 1,
  },
});

export default Screen;
