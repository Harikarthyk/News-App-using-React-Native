import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {getNewsByCategory} from '../../client';
import VerticalList from './VerticalList';

function NewsList(props) {
  const category = props.route.params.category;
  const [data, setData] = useState([]);
  useEffect(() => {
    getNewsByCategory(category)
      .then((result) => {
        if (result) setData(result.articles);
      })
      .catch((error) => console.error(error));
  });
  return (
    <ScrollView>
      <VerticalList title={category} data={data} />
    </ScrollView>
  );
}

export default NewsList;
