export const getHeadLines = () => {
  return fetch(
    `http://newsapi.org/v2/top-headlines?country=in&apiKey=5ee5f5d6c4d94c178285c633951212bb`,
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const getResults = (query) => {
  return fetch(
    `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=5ee5f5d6c4d94c178285c633951212bb`,
  )
    .then((result) => result.json())
    .catch((error) => console.error(error));
};
