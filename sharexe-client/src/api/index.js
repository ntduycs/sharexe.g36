import axios from 'axios';
import qs from 'qs';

axios.defaults.withCredentials = true;

/**
 * package.json, set proxy localhost:5000 for development
 */
export const baseUrl = '';

export const isAuthenticated = () => {
  return axios.get(baseUrl + '/api/auth/verify');
};

export const logout = () => {
  return axios.get(baseUrl + '/api/auth/logout');
};

export const login = ({ username, password }) => {
  return axios
    .post(
      baseUrl + '/api/auth',
      qs.stringify({
        username,
        password
      })
    )
    .then(res => res.data);
};