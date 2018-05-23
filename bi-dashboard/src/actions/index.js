import axios from 'axios';

// https://api.irecommend.se/api/v1/bi/positions - Returnerar alla positioner
// https://api.irecommend.se/api/v1/bi/recommendations - Returnerar alla rekommendationer
// https://api.irecommend.se/api/v1/bi/transactions/sum/users - Returnerar den individuella high-score listan
// https://api.irecommend.se/api/v1/bi/transactions/sum/teams - Returnerar high-score för teams
// https://api.irecommend.se/api/v1/bi/transactions/sum/users - Returnerar det totala antalet rekommendationer (state representerar vilket läge rekommendationen är i,


const ROOT_URL = 'https://api.irecommend.se/api/v1/bi/';
const PROTECTED_URL = 'https://api.irecommend.se/api/v1/positions';
const TRANSACTIONS = 'transactions/sum/';

export const FETCH_NUMBERS = 'FETCH_NUMBERS';
export const FETCH_POSITIONS = 'FETCH_POSITIONS';
export const FETCH_TEAMSCORE = 'FETCH_TEAMSCORE';
export const FETCH_USERSCORE = 'FETCH_USERSCORE';
export const FETCH_PROTECTED = 'FETCH_PROTECTED';

export function fetchNumbers(){

    const request = axios.get(`${ROOT_URL}recommendations`);

    return {
        type: FETCH_NUMBERS,
        payload: request
    };
}

export function fetchPositions(){
    const request = axios.get(`${ROOT_URL}positions`);

    return {
        type: FETCH_POSITIONS,
        payload: request
    };
}
export function fetchUserScore(){
    const request = axios.get(`${ROOT_URL}${TRANSACTIONS}users`);

    return {
        type: FETCH_USERSCORE,
        payload: request
    };

}

export function fetchTeamScore(){
    const request = axios.get(`${ROOT_URL}${TRANSACTIONS}teams`);

    return {
        type: FETCH_TEAMSCORE,
        payload: request
    };

}

export function fetchProtected(){
    const authHeader = 'Bearer ' + localStorage.getItem('access_token');
    const request = axios.get(PROTECTED_URL, {'headers': {'Authorization' : authHeader}})

     console.log(request);
    return {
        type: FETCH_PROTECTED,
        payload: request
    };
}
