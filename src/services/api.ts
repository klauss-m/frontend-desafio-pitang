import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-desafio-pitang.herokuapp.com/',
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export { api };
