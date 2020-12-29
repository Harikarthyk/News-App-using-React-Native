import React, {useEffect, useState} from 'react';
import BreakingNews from './BreakingNews';
import TechNews from './TechNews';
// import FeaturedNews from './app/Components/FeaturedNews';
import Screen from './Screen';
import SearchBar from './SearchBar';
// import VerticalList from './app/Components/VerticalList';
import SportsNews from './SportsNews';
import {getHeadLines, getNewsByCategory} from '../../client';
import Business from './Business';
import Health from './Health';
import Entertainment from './Entertainment';

function Home() {
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
        if (!result) return;
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
        if (!result) return;
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
        if (!result) return;
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'sports'});

          setSportsNews(arr);
        }
      })
      .catch((error) => console.error(error));

    //Health
    getNewsByCategory('health')
      .then((result) => {
        if (!result) return;
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'health'});

          setHealthNews(arr);
        }
      })
      .catch((error) => console.error(error));

    //Entertainment
    getNewsByCategory('entertainment')
      .then((result) => {
        if (!result) return;
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'entertainment'});

          setEntertainmentNews(arr);
        }
      })
      .catch((error) => console.error(error));

    //Business
    getNewsByCategory('business')
      .then((result) => {
        if (!result) return;
        let arr = result.articles.slice(0, 5);
        if (arr.length) {
          arr.push({type: 'viewMore', category: 'business'});

          setBusinessNews(arr);
        }
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

export default Home;
