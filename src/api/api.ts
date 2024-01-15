import axios from 'axios';
import { SendUrl } from './types/types';

export const sendUrl: SendUrl = (url, method, data, header) => {
  switch (method) {
    case 'GET':
      return axios
        .get(url)
        .then(res => res)
        .catch(err => err);
    case 'POST':
      return null;
    case 'PUT':
      return null;
    case 'PATCH':
      return null;
  }
};
