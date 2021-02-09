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
      maxResults: 10,
      key: 'AIzaSyAbK3FAjRa4Cq7m9-VrdxqQTyF7SgyBZsA',
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
      // alerts??
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default Api;
