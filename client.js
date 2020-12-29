//Headlines
export const getHeadLines = () => {
  return fetch(
    `http://newsapi.org/v2/top-headlines?country=in&sortBy=popularity&apiKey=5ee5f5d6c4d94c178285c633951212bb`,
  )
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
};

//By Query
export const getNewsByQuery = (query) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=5ee5f5d6c4d94c178285c633951212bb`,
  )
    .then((result) => result.json())
    .catch((error) => console.error(error));
};

//By Category
export const getNewsByCategory = (category = 'sports') => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=5ee5f5d6c4d94c178285c633951212bb`,
  )
    .then((result) => result.json())
    .catch((error) => console.error(error));
};
