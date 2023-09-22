import axios from 'axios';

const baseURL = 'http://localhost:3500';

export function getAllNews() {
    const response = axios.get(`${baseURL}/news/all`);
    return response;
};