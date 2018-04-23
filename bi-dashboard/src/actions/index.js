import axios from 'axios';

const ROOT_URL = 'https://api.irecommend.se/api/v1/bi/';


export const FETCH_NUMBERS = 'FETCH_NUMBERS';

export function fetchNumbers(){

    const request = axios.get(`${ROOT_URL}recommendations`);
    console.log('fetch done');
    return {
        type: FETCH_NUMBERS,
        payload: request
    };
}
