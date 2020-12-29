import React from 'react';
import {View} from 'react-native';
import HorizontalList from './HorizontalList';

function TechNews({data}) {
  return (
    <View style={{marginBottom: 50}}>
      <HorizontalList size={22} title={'Tech News'} data={data} />
    </View>
  );
}

export default TechNews;
