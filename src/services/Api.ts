import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

Api.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
    };
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

export default Api;
