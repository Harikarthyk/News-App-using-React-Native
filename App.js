import React, {useEffect, useState} from 'react';
import BreakingNews from './app/Components/BreakingNews';
import TechNews from './app/Components/TechNews';
import FeaturedNews from './app/Components/FeaturedNews';
import Screen from './app/Components/Screen';
import SearchBar from './app/Components/SearchBar';
import VerticalList from './app/Components/VerticalList';
import SportsNews from './app/Components/SportsNews'
import data from './fakeData';
import {getHeadLines, getNewsByCategory, getNewsByQuery} from './client';

function App() {
  const [breakingNews, setBreakingNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);

  useEffect(() => {
    getHeadLines()
      .then((result) => {
        setBreakingNews(result.articles);
      })
      .catch((error) => console.error(error));

    getNewsByCategory('technology')
      .then((result) => {
        setTechNews(result.articles);
      })
      .catch((error) => console.error(error));

    getNewsByCategory('sports')
      .then((result) => {
        setSportsNews(result.articles);
      })
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
        <SportsNews data={sportsNews} />
        {/* <VerticalList title={'Sports News'} data={sportsNews} /> */}
        <TechNews data={techNews} />
      </Screen>
    </>
  );
}

export default App;
