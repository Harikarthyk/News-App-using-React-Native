// const API_KEY = '22d0ea0f8fe848389rb1e7a5c8a727605';
const API_KEY = '5ee5f5d6c4d94c178285c633951212bb';
//Headlines
export const getHeadLines = () => {
  return fetch(
    `http://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=${API_KEY}`,
    // `http://api.mediastack.com/v1/news?access_key=cd72b5b3356b0aa3785a219741fcad5d`,
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
};

//By Query
export const getNewsByQuery = (query) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${API_KEY}`,
  )
    .then((result) => result.json())
    .catch((error) => console.error(error));
};

//By Category
export const getNewsByCategory = (category = 'sports') => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`,
  )
    .then((result) => result.json())
    .catch((error) => console.error(error));
};
