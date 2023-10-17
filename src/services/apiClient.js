import axios from 'axios';
import Token from '../utils/token/tokenHandler';

const API_BASE_URL = `${process.env.REACT_APP_BACKEND_URL}`;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  config => {
    let token = Token();
    const tokenData = JSON.parse(token.getToken());
    token = tokenData?.token || '';
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    if (tokenData) {
      const token = tokenData.token;
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    };

    return config;
  },
  error => {
    Promise.reject(error)
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    /**
     * Do something in case the response returns an error code [3**, 4**, 5**] etc
     * For example, on token expiration retrieve a new access token, retry a failed request etc
     */
    return Promise.reject(error);
  },
);


export default apiClient;
