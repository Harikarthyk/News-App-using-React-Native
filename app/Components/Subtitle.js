import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Subtitle({children, noofLines = 2, size = 13}) {
  return (
    <Text numberOfLines={noofLines} style={[{fontSize: size}, styles.title]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {fontWeight: '800'},
});

export default Subtitle;
