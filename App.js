import React, {useEffect} from 'react';
import BreakingNews from './app/Components/BreakingNews';
import TechNews from './app/Components/TechNews';
import FeaturedNews from './app/Components/FeaturedNews';
import Screen from './app/Components/Screen';
import SearchBar from './app/Components/SearchBar';
import VerticalList from './app/Components/VerticalList';
import data from './fakeData';
import {getHeadLines} from './client';

function App() {
  const breakingNews = data.filter((item) => item.category === 'breaking-news');
  const techNews = data.filter((item) => item.category === 'tech');

  const politicalNews = data.filter((item) => item.category === 'political');
  useEffect(() => {
    getHeadLines()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Screen>
        <SearchBar />
        <FeaturedNews
          item={{
            id: '20',
            title: 'This is the title no twenty.',
            desc:
              'Desc is the short form of description and this format is the actual same as our real database.',
            thumbnail: 'http://lorempixel.com/400/200/',
            category: 'entertainment',
          }}
        />
        <BreakingNews data={breakingNews} />
        <VerticalList title={'Political News'} data={politicalNews} />
        <TechNews data={techNews} />
        <VerticalList title={'Political News'} data={politicalNews} />
      </Screen>
    </>
  );
}

export default App;
