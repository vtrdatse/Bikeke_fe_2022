import axios from 'axios';
// import { Common, LocalStorageKey } from '@/constants';
import Common from '../utils/Common';
import LocalStorageKey from '../utils/LocalStorageKey';

const apiBaseUrl = 'https://another-bikeke2.herokuapp.com/api/v1/';

const axiosClient = axios.create({
    baseURL: apiBaseUrl,
    timeout: 40000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
        'Access-Control-Allow-Headers': 'content-type,Authorization',
    },
});

const handleError = (error) => {
    const status = error.response.status;

    return Promise.reject({ data: error.response.data, status: status });
};

// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const accessToken = localStorage.getItem(LocalStorageKey.ACESS_TOKEN);
        if (accessToken) {
            config.headers['Authorization'] = accessToken;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return handleError(error);
    },
);

export default axiosClient;
