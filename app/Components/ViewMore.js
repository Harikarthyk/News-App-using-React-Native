import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ViewMore({style}) {
  return (
    <View style={[style]}>
      <Text style={styles.viewMoreText}>View More</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewMoreText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#8885C7',
  },
});

export default ViewMore;
