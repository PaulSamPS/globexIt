import axios from 'axios';

export const $api = axios.create({
    baseURL: 'https://data-globex-it.vercel.app',
});
