import React, {useEffect, useState} from 'react';
import BreakingNews from './app/Components/BreakingNews';
import TechNews from './app/Components/TechNews';
// import FeaturedNews from './app/Components/FeaturedNews';
import Screen from './app/Components/Screen';
import SearchBar from './app/Components/SearchBar';
// import VerticalList from './app/Components/VerticalList';
import SportsNews from './app/Components/SportsNews';
// import data from './fakeData';
import {getHeadLines, getNewsByCategory, getNewsByQuery} from './client';
import Business from './app/Components/Business';
import Health from './app/Components/Health';
import Entertainment from './app/Components/Entertainment';

function App() {
  const [breakingNews, setBreakingNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [sportsNews, setSportsNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);

  useEffect(() => {
    //Headlines
    getHeadLines()
      .then((result) => {
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'headlines'});

          setBreakingNews(arr);
        }
      })
      .catch((error) => console.error(error));

    //Technology
    getNewsByCategory('technology')
      .then((result) => {
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'technology'});

          setTechNews(arr);
        }
      })
      .catch((error) => console.error(error));

    //Sports
    getNewsByCategory('sports')
      .then((result) => {
        setSportsNews(result.articles);
      })
      .catch((error) => console.error(error));

    //Health
    getNewsByCategory('health')
      .then((result) => {
        setHealthNews(result.articles);
      })
      .catch((error) => console.error(error));

    //Entertainment
    getNewsByCategory('entertainment')
      .then((result) => {
        setEntertainmentNews(result.articles);
      })
      .catch((error) => console.error(error));

    //Business
    getNewsByCategory('business')
      .then((result) => {
        setBusinessNews(result.articles);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Screen>
        <SearchBar />

        <BreakingNews data={breakingNews} />
        <SportsNews data={sportsNews} />
        <Business data={businessNews} />
        <Health data={healthNews} />
        <Entertainment data={entertainmentNews} />
        {/* <VerticalList title={'Sports News'} data={sportsNews} /> */}
        <TechNews data={techNews} />
      </Screen>
    </>
  );
}

export default App;
