import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((req) => {
  const token = localStorage.getItem('');

  if (token) {
    req.headers = {
      ...req.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    let message = 'Something went wrong. Please try again later';

    if (error.response?.data?.message) message = error.response?.data?.message;

    if (error.response?.status === 400) message = error.response.data.message;

    return Promise.reject(new Error(message));
  }
);

export default api;
