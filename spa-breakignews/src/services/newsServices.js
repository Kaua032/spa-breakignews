import axios from 'axios';

const baseURL = 'http://localhost:3500';

export function getAllNews() {
    const response = axios.get(`${baseURL}/news/all?limit=10&offset=0`);
    return response;
};

export function getTopNews() {
    const response = axios.get(`${baseURL}/news/top`);
    return response;
};

export function searchNews(title){
    const response = axios.get(`${baseURL}/news/search?title=${title}`);
    return response;
}