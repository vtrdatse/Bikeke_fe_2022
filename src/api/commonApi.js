import axios from 'axios';
import { replaceSortParams } from './helperApi';

const commonApi = {
    list: (url, page) => {
        return axios.get(url, {
            params: { page: page },
        });
    },
    search: (url, params) => {
        return axios.get(url, {
            params: replaceSortParams(params),
        });
    },
    getById: (url) => {
        return axios.get(url);
    },
    create: (url, body) => {
        return axios.post(url, body);
    },
    update: (url, body) => {
        return axios.put(url, body);
    },
    active: (url) => {
        return axios.put(url);
    },
    deactive: (url) => {
        return axios.delete(url);
    },
};
export default commonApi;
