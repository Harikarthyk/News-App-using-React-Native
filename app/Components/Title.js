import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Title({children, noofLines = 1, size = 17}) {
  return (
    <Text numberOfLines={noofLines} style={[{fontSize: size}, styles.title]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {fontWeight: 'bold'},
});

export default Title;
