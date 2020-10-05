/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';

const config = {
  baseURL: 'http://127.0.0.1:3000/api',
};

const connectApi = axios.create(config);

export function get(resource, options = {}) {
  return connectApi.get(resource, options);
}
