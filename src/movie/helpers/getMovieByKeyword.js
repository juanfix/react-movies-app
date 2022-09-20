import axios from 'axios';

export const getMovieByKeyword = async (keyword) => {
  const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=18f4e4097bd69e5bd0f4fbb32f390b1b&language=en-US&page=1&include_adult=false&query=${keyword}`;
  const { data: response } = await axios.get(endPoint);
  return response;
};
