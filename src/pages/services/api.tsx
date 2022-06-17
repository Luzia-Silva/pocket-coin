import axios from 'axios';

//https://docs.awesomeapi.com.br/api-de-moedas
const api = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/last'
});

export default api;