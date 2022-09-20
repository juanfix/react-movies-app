import axios from 'axios';

export const getMovieById = async (id) => {
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGY0ZTQwOTdiZDY5ZTViZDBmNGZiYjMyZjM5MGIxYiIsInN1YiI6IjYzMDFjMjAwMDk3YzQ5MDA3YWEyNTZiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ear0Eka795P0Jt4mM7-41bTSbkrq8AxuI_xY4meyfiY`,
    },
  };
  const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=18f4e4097bd69e5bd0f4fbb32f390b1b&language=en-US`;
  const { data: response } = await axios.get(endPoint, config);
  return response;
};
