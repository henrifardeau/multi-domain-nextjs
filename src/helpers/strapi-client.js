import axios from 'axios';

import strapiUrl from './strapi-url';

const strapiClient = axios.create({
  baseURL: strapiUrl,
});

strapiClient.interceptors.request.use(
  (request) => request,
  (error) => Promise.reject(error)
);

strapiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default strapiClient;
