import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: "https://fakestoreapi.com",
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "1609efadb5fa4443401173f23cebcee6",
  },
});

export default axiosInstance;