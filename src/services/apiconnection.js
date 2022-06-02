import axios from 'axios';

const api = axios.create({
//   baseURL: 'https://sujeitoprogramador.com/'
baseURL: 'https://api.jsonbin.io/'
});

export default api;