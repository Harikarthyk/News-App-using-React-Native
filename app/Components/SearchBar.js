import React, {useState} from 'react';
import {getNewsByQuery} from '../../client';
import {StyleSheet, TextInput, View} from 'react-native';
import SearchModel from './SearchModel';

let timeOutId;
const debounce = (func, delay) => {
  return () => {
    if (timeOutId) clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      func();
    }, delay);
  };
};
function SearchBar({setIsSearchFocused}) {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(false);

  const handleSearch = () => {
    getNewsByQuery(query).then((result) => {
      if (result) {
        if (result && result.articles) setData(result.articles);
      }
      return;
    });
  };

  const debounceSearch = debounce(handleSearch, 450);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          onChangeText={(e) => {
            setQuery(e);
            debounceSearch();
            setVisible(true);
          }}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => {
            setVisible(false);
            setIsSearchFocused(false);
          }}
          style={styles.searchInput}
          placeholder="Search here ... "
        />
      </View>
      <SearchModel data={data} query={query} visible={visible} />
    </>
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
