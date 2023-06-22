import axios from 'axios';

export const fetchVideos = async (searchQuery) => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US'
  );
  return response.data;
};