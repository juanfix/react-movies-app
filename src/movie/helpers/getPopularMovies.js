import axios from 'axios';

export const getPopularMovies = async () => {
  const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=18f4e4097bd69e5bd0f4fbb32f390b1b&language=en-US&page=1`;
  const { data: response } = await axios.get(endPoint);
  return response;
};
