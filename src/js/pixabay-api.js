import axios from 'axios';
import { createGallery, hideLoader } from './render-functions';
import iziToast from 'izitoast';
import iconError from '../public/error-icon.svg';

const apiKey = '52590254-85187c30c56e1e2220df9945c';
axios.defaults.baseURL = `https://pixabay.com`;

export function getImageByQuery(query) {
  const formattedQuery = query.split(' ').join('+');
  return axios
    .get('/api/', {
      params: {
        key: apiKey,
        q: formattedQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      return res.data.hits;
    })
    .catch(error => console.log(error));
}
